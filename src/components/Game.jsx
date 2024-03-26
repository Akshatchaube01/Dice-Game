import React, { useState } from 'react';
import Dice from './Dice';
import Player from './Player';
import Scoreboard from './Scoreboard';
import './Game.css';

const Game = () => {
  // State to keep track of players' scores
  const [playerScores, setPlayerScores] = useState({
    player1: 0,
    player2: 0
  });

  // State to keep track of the winner of each round
  const [roundWinner, setRoundWinner] = useState(null);

  // Function to handle updating player scores
  const updatePlayerScore = (player, score) => {
    console.log(`Updating ${player}'s score with ${score}`);
    setPlayerScores(prevScores => ({
      ...prevScores,
      [player]: prevScores[player] + score
    }));

    // Determine the winner after each roll
    determineRoundWinner();
  };

  // Function to determine the winner of the round
  const determineRoundWinner = () => {
    if (playerScores.player1 > playerScores.player2) {
      setRoundWinner("Player 1");
    } else if (playerScores.player2 > playerScores.player1) {
      setRoundWinner("Player 2");
    } else {
      setRoundWinner("It's a tie");
    }
  };

  return (
    <div className="game-container">
      <div className="center">
        <div className="players">
          <Player name="Player 1" score={playerScores.player1} />
          <Player name="Player 2" score={playerScores.player2} />
        </div>
        <div className="dice-container">
          <Dice updatePlayerScore={updatePlayerScore} />
        </div>
        <Scoreboard playerScores={playerScores} roundWinner={roundWinner} />
      </div>
    </div>
  );
};

export default Game;
