import React from "react";

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


function chooseRandomTeams(handleCurrentTeams, teams) {    
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
	handleCurrentTeams(selectedTeams);    
}

export default chooseRandomTeams;