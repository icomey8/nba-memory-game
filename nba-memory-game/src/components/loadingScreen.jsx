// LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#0c0f11]">
            <h3 className='text-xl font-medium text-transparent gradient-text animate-gradient'>Loading...</h3>
        </div>
    );
};

export default LoadingScreen;