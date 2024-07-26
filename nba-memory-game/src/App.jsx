import React, { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import TeamLogos from "./icons/teamLogos.jsx";
import Card from "./components/Card.jsx";
import GameBoard from "./components/gameScreen.jsx";
import MenuScreen from "./components/Menu.jsx";
import chooseRandomTeams  from "./utils/randomizer.jsx";
import handleShuffle from "./utils/shuffle.jsx";

//* state updates are asynchronous, keep that in mind if you run into any bugs.


function endGame() {
  console.log("end game");  
}


function App() {
	const [teams, setTeams] = useState([]); //? full list of 30 teams
	const [currentTeams, setCurrentTeams] = useState([]); //? 12 random teams from the 30
	const [clickedTeams, setClickedTeams] = useState({}); //? teams that have/haven't been clicked
  const [gameState, setGameState] = useState({
    gameStart: false,
    over: false,
    won: false,
    score: 0, //! doesn't update immediately
  });

  const handleCurrentTeams = (selectedTeams) => {
    setCurrentTeams(selectedTeams);
  }

  const handleShuffling = (shuffledTeams) => {
    setCurrentTeams(shuffledTeams);
  }

  const updateScore = (setGameState) => {
    setGameState((prevState) => {
      const newScore = prevState.score + 1;
      return {
        ...prevState,
        score: newScore,
      }
    });
  }

  function continueGame(clickedTeams, setClickedTeams, team, currentTeams, setGameState, updateScore) {
    console.log("continue game");
    updateScore(setGameState);
    setClickedTeams({...clickedTeams, [team.id]: true});
    handleShuffle(currentTeams, handleShuffling);
  }

	let api_key = import.meta.env.VITE_BDL_API_KEY;

	useEffect(() => {
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
    
		fetchData();
    const initializeClickedStatus = {}
    currentTeams.forEach(team => {
      initializeClickedStatus[team.id] = false;
    });
    setClickedTeams(initializeClickedStatus);

    
	}, []); //! change to trigger useEffect when score is 0? depends on how we handle game over event.



	return (
		<>
      { (gameState.gameStart) ? (
              <GameBoard
              currentTeams={currentTeams}
              clickedTeams={clickedTeams}
              setClickedTeams={setClickedTeams}
              endGame={endGame}
              continueGame={continueGame}
              setGameState={setGameState}
              gameState={gameState}
              updateScore={updateScore}
              />
      ) : <MenuScreen />}

      
		</>
	);
}


export default App;
