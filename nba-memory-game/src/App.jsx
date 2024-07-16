import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClippersLogo  from './icons/clippersLogo.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className='h-screen w-screen bg-primary-color flex flex-col justify-center items-center'>
      <ClippersLogo />
      </div>
    </>
  )
}

export default App
