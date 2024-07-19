import React, { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { ClippersLogo, PacersLogo, SixersLogo } from './icons/clippersLogo.jsx'

// DONT KEEP API KEY IN THE FILES

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
        if (!selectedTeams.some(e => e.id === team.id)) {
          selectedTeams.push(team);
        }
      }
    }
    setCurrentTeams(selectedTeams);
  }





function App() {
  const [teams, setTeams] = useState([]); // full list of 30 teams
  const [currentTeams, setCurrentTeams] = useState([]); // 12 random teams
  
  useEffect(() => { 
    async function fetchData() {
      try {
        const response = await fetch("https://api.balldontlie.io/v1/teams", {
          method: 'GET',
          headers: {'Authorization': api_key}
      });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json();
        const teamsData = data.data.slice(0, 30);
        setTeams(teamsData);
        chooseRandomTeams(setCurrentTeams, teamsData);


      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
    }, []);
  


  return (
    <>
      <div className='h-screen w-screen bg-primary-color flex flex-col justify-center items-center'>
        {currentTeams.map((team) => {
          return (
            <p>{team.name}</p>
          )
        })}
        {/* <ClippersLogo />
        <PacersLogo />
        <SixersLogo /> */}
      </div>
    </>
  )
}

export default App

