import React, { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "./components/gameScreen.jsx";
import MenuScreen from "./components/Menu.jsx";
import WinScreen from "./components/winScreen.jsx";
import LoseScreen from "./components/lossScreen.jsx";
import chooseRandomTeams from "./utils/randomizer.jsx";
import handleShuffle from "./utils/shuffle.jsx";
import LoadingScreen from "./components/loadingScreen.jsx";

function App() {
  const [loading, setLoading] = useState(false);
	const [teams, setTeams] = useState([]); //? full list of 30 teams
	const [currentTeams, setCurrentTeams] = useState([]); //? 12 random teams from the 30
	const [clickedTeams, setClickedTeams] = useState({}); //? teams that have/haven't been clicked
	const [gameState, setGameState] = useState({
		gameStart: false,
		over: false,
		won: false,
		score: 0,
	});

	const handleCurrentTeams = (selectedTeams) => {
		setCurrentTeams(selectedTeams);
	};

	const handleShuffling = (shuffledTeams) => {
		setCurrentTeams(shuffledTeams);
	};

	const startNewGame = (setGameState) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGameState({
        gameStart: true,
        over: false,
        won: false,
        score: 0,
      });
      const initializeClickedStatus = {};
      currentTeams.forEach((team) => {
        initializeClickedStatus[team.id] = false;
      });
      setClickedTeams(initializeClickedStatus);
      chooseRandomTeams(handleCurrentTeams, teams);
    }, 750);
	};

	function endGame() {
		setGameState((prevState) => ({
			...prevState,
			over: true,
		}));
	}

	const updateScore = () => {
		setGameState((prevState) => {
			const newScore = prevState.score + 1;
			return {
				...prevState,
				score: newScore,
			};
		});
	};

	function continueGame(
		clickedTeams,
		setClickedTeams,
		team,
		currentTeams,
		setGameState,
		updateScore
	) {
		updateScore(setGameState);
		setClickedTeams({ ...clickedTeams, [team.id]: true });
		handleShuffle(currentTeams, handleShuffling);
	}

	let api_key = import.meta.env.VITE_BDL_API_KEY;

	async function fetchData() {
		try {
			const response = await fetch("https://api.balldontlie.io/v1/teams", {
				method: "GET",
				headers: { Authorization: api_key },
			});
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			const data = await response.json();
			const teamsData = data.data.slice(0, 30);
			setTeams(teamsData);
			chooseRandomTeams(handleCurrentTeams, teamsData);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData();
		const initializeClickedStatus = {};
		currentTeams.forEach((team) => {
			initializeClickedStatus[team.id] = false;
		});
		setClickedTeams(initializeClickedStatus);
	}, []);

	const resetGame = () => {
		setGameState({
			gameStart: true,
			over: false,
			won: false,
			score: 0,
		});
		const initializeClickedStatus = {};
		currentTeams.forEach((team) => {
			initializeClickedStatus[team.id] = false;
		});
		setClickedTeams(initializeClickedStatus);

		chooseRandomTeams(handleCurrentTeams, teams);
	};

  if (loading) {
    return <LoadingScreen />;
  }

	return (
		<>
			{!gameState.gameStart ? (
				<MenuScreen
					setGameState={setGameState}
					gameState={gameState}
					startNewGame={startNewGame}
				/>
			) : gameState.over ? (
				<LoseScreen resetGame={resetGame} />
			) : gameState.won ? (
				<WinScreen resetGame={resetGame} />
			) : (
				<GameBoard
					currentTeams={currentTeams}
					clickedTeams={clickedTeams}
					setClickedTeams={setClickedTeams}
					endGame={endGame}
					continueGame={continueGame}
					setGameState={setGameState}
					gameState={gameState}
					updateScore={updateScore}
					resetGame={resetGame}
				/>
			)}
		</>
	);
}

export default App;
