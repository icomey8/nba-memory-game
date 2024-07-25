import React from "react";

function shuffleTeams(currentTeams) {
    const sortedArr = structuredClone(currentTeams);
    for (let i = sortedArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [sortedArr[i], sortedArr[j]] = [sortedArr[j], sortedArr[i]];
    }
    return sortedArr;
  }
  
  function handleShuffle(currentTeams, handleShuffling) {
    const shuffledTeams = shuffleTeams(currentTeams);
    handleShuffling(shuffledTeams);
  }

export default handleShuffle;