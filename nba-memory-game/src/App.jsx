import React, { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import TeamLogos from "./icons/teamLogos.jsx";
import Card from "./components/Card.jsx";
import chooseRandomTeams  from "./utils/randomizer.jsx";
import handleShuffle from "./utils/shuffle.jsx";




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
    score: 0,
  });

  const handleCurrentTeams = (selectedTeams) => {
    setCurrentTeams(selectedTeams);
  }

  const handleShuffling = (shuffledTeams) => {
    setCurrentTeams(shuffledTeams);
  }

  function continueGame(clickedTeams, setClickedTeams, team, currentTeams) {
    console.log("continue game");
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

    
	}, []); //! change to trigger useEffect when score is 0?



	return (
		<>
			<div className="flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-test-pattern">
				<div className="flex w-[1252px] items-end justify-between">
					<div className="flex items-center gap-4">
						<h1 className="text-4xl font-bold">Memory Master</h1>
						<button className="w-6 p-1 bg-[#321E0F] rounded mt-1.5 hover:bg-[#462002]">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="#F98110"
								className="size-4"
							>
								<path
									fillRule="evenodd"
									d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<h1 className="text-3xl font-semibold">6/12</h1>
				</div>

				<div className="grid gap-5 pt-5 grid-cols-team-col grid-rows-team-row">
					{currentTeams.map((team) => {
						const TeamLogoComponent = TeamLogos[team.name];
            const isClicked = clickedTeams[team.id];
            
            //? if game start is false, render menu.  
            //? if true, then check if game is over 
              //? if false, then render game like below
              //? if true and win, render win screen. if true and lose, render lose screen

						return (
							<div key={team.id} className="" onClick={() => {
                isClicked ? endGame() : continueGame(clickedTeams, setClickedTeams, team, currentTeams);
              }}>
								<Card teamLogo={<TeamLogoComponent />} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}


export default App;
