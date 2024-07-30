import React from "react";
import Card from "./Card";
import TeamLogos from "../icons/teamLogos.jsx";

const checkGameState = (
	team,
	clickedTeams,
	setClickedTeams,
	currentTeams,
	setGameState,
	updateScore,
	gameState,
	endGame,
	continueGame
) => {
	const isClicked = clickedTeams[team.id];

	if (isClicked) {
		endGame(gameState, setGameState);
	} else {
		continueGame(
			clickedTeams,
			setClickedTeams,
			team,
			currentTeams,
			setGameState,
			updateScore
		);

		// Check if the game is won after updating the score
		if (gameState.score + 1 === 12) {
			setGameState((prevState) => ({
				...prevState,
				won: true,
			}));
		}
	}
};

const GameBoard = ({
	resetGame,
	currentTeams,
	clickedTeams,
	setClickedTeams,
	endGame,
	continueGame,
	setGameState,
	updateScore,
	gameState,
}) => {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-test-pattern">
			<div className="flex w-[1252px] items-end justify-between">
				<div className="flex items-center gap-4">
					<h1 className="text-4xl font-bold">Memory Master</h1>
					<button
						onClick={resetGame}
						className="w-6 p-1 bg-[#321E0F] rounded mt-1.5 hover:bg-[#462002]"
					>
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
				<h1 className="text-3xl font-semibold">{gameState.score}/12</h1>
			</div>

			<div className="grid gap-5 pt-5 grid-cols-team-col grid-rows-team-row">
				{currentTeams.map((team) => {
					const TeamLogoComponent = TeamLogos[team.name];

					return (
						<div
							key={team.id}
							className=""
							onClick={() =>
								checkGameState(
									team,
									clickedTeams,
									setClickedTeams,
									currentTeams,
									setGameState,
									updateScore,
									gameState,
									endGame,
									continueGame
								)
							}
						>
							<Card teamLogo={<TeamLogoComponent />} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default GameBoard;
