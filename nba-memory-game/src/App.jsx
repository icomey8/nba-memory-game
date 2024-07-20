import React, { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import TeamLogos from "./icons/teamLogos.jsx";
import Card from "./components/Card.jsx";

// DONT KEEP API KEY IN THE FILES
// we will control the screen with a state variable

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function chooseRandomTeams(setCurrentTeams, teams) {
	let selectedTeams = [];
	while (selectedTeams.length < 12) {
		let team_number = getRandomIntInclusive(0, 29);
		let team = teams[team_number];

		if (selectedTeams.length === 0) {
			selectedTeams.push(team);
		} else {
			if (!selectedTeams.some((e) => e.id === team.id)) {
				selectedTeams.push(team);
			}
		}
	}
	setCurrentTeams(selectedTeams);
}

// using team.id as key for now

function App() {
	const [teams, setTeams] = useState([]); // full list of 30 teams
	const [currentTeams, setCurrentTeams] = useState([]); // 12 random teams from the 30
	// const [clickedteams, setClickedTeams] = useState([]); // teams that have been clicked

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
				chooseRandomTeams(setCurrentTeams, teamsData); // make handler function for setCurrentTeams if you're going to move it to diff fiel
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	// console.log(currentTeams);

	return (
		<>
			<div className="flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-test-pattern">
				{/* {currentTeams.map((team) => {
          const TeamLogoComponent = TeamLogos[team.name];

          return (
            <div key={team.id}>
              <Card teamLogo={<TeamLogoComponent />} />
            </div>
          )
        }
      )} */}

				<div className="grid gap-5 mt-20 grid-cols-team-col grid-rows-team-row">
					{currentTeams.map((team) => {
          const TeamLogoComponent = TeamLogos[team.name];

          return (
            <div key={team.id} className="">
              <Card teamLogo={<TeamLogoComponent />} />
            </div>
          )
        }
      )}
				</div>
			</div>
		</>
	);
}

{
	/* <div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div>
<div>
<Card teamLogo={<TeamLogos.Clippers />} />
</div> */
}

export default App;
