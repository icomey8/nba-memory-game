import React from 'react';
import clippersLogo from '../assets/clips.png'; // Adjust the path as necessary
import pacersLogo from '../assets/pacers.png'
import sixersLogo from '../assets/sixers.png'

function ClippersLogo() {
  return <img src={clippersLogo} alt="Clippers Logo" width={75} height={75}/>;
}

function PacersLogo() {
  return <img src={pacersLogo} alt="Pacers Logo" width={75} height={75}/>;
}

function SixersLogo() {
  return <img src={sixersLogo} alt="Sixers Logo" width={75} height={75}/>;
}

export { ClippersLogo, PacersLogo, SixersLogo };


// create a card component, import it here.