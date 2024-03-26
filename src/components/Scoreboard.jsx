import React from 'react';
import '../components/ScoreBoard.css';

const Scoreboard = ({ playerScores, roundWinner }) => {
  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <div className="scores">
        {Object.keys(playerScores).map(player => (
          <p key={player}>{player}: {playerScores[player]}</p>
        ))}
      </div>
      <p>Round Winner: {roundWinner}</p>
    </div>
  );
};

export default Scoreboard;
