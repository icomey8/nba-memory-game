import { SocialIcon } from "react-social-icons";


const MenuScreen = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-test-pattern"> 
                <div className="relative flex flex-col items-center justify-center h-[560px] w-[1252px] rounded-md bg-green-50/5 backdrop-blur-md gap-8">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className='text-6xl font-extrabold'>NBA Memory Master</h1>
                        <h2 className="mt-2 text-xl font-medium opacity-40">Test how well you can remember team logos in this simple card memory game.</h2>
                    </div>
                    <div>
                        <button type="button" className="p-3 mt-3 bg-[#18191B] border border-[#6C6E79] rounded-2xl hover:border-[#B2B3BD] font-semibold]">New Game</button>
                    </div>
                    <div></div>
                    <div className="absolute bottom-0 flex flex-row items-center justify-center gap-4 pb-5 w-ful">
                        <SocialIcon bgColor="#1E1510" fgColor="#F98110" url="https://www.linkedin.com/in/ianwhcomey/"/>
                        <SocialIcon bgColor="#1E1510" fgColor="#F98110" url="https://github.com/icomey8"/>
                        {/* for icons use https://www.npmjs.com/package/react-social-icons */}
                    </div>
                </div>
            </div>
        </>
    )
}


export default MenuScreen;