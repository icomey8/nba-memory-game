import { SocialIcon } from "react-social-icons";

const LoseScreen = ({ resetGame }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-test-pattern">
				<div className="relative flex flex-col items-center justify-center h-[560px] w-[1252px] rounded-md bg-green-50/5 backdrop-blur-md gap-8">
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-6xl font-extrabold">You Lost!</h1>
						<h2 className="mt-2 text-xl font-medium opacity-40">
							Maybe your next try will be better?
						</h2>
					</div>
					<div>
						<button
							type="button"
							onClick={resetGame}
							className="p-3 mt-3 border border-[#6C6E79] rounded-2xl hover:border-[#B2B3BD] font-semibold"
						>
							Play Again
						</button>
					</div>
					<div></div>
					<div className="absolute bottom-0 flex flex-row items-center justify-center gap-4 pb-5 w-ful">
						<SocialIcon
							bgColor="#1E1510"
							fgColor="#F98110"
							url="https://www.linkedin.com/in/ianwhcomey/"
						/>
						<SocialIcon
							bgColor="#1E1510"
							fgColor="#F98110"
							url="https://github.com/icomey8"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoseScreen;
