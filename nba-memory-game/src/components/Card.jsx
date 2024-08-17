import React from "react";

function Card({ teamLogo }) {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-48 transition-transform duration-300 border border-transparent rounded-md bg-green-50/5 backdrop-blur-md h-60 hover:border-stone-500 active:scale-95">
				<div>{teamLogo}</div>
			</div>
		</>
	);
}

export default Card;
