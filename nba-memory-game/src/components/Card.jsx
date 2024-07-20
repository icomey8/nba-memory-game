import React from "react";


function Card({ teamLogo }) {
    return (
        <>
        <div className="h-60 w-48 bg-[#222325] border border-transparent hover:border-stone-500 rounded-md flex flex-col items-center justify-center">
            <div>{teamLogo}</div>
        </div>
        </>
    )
}


export default Card;