import React from 'react';
import './Dice.css';

const Dice = ({ updatePlayerScore }) => {
  // Function to roll the dice and update player score
  const rollDice = () => {
    // Simulate rolling a dice (generating a random number between 1 and 6)
    const diceResult = Math.floor(Math.random() * 6) + 1;
    console.log("Dice rolled, result:", diceResult);

    // Assuming there are only two players (player1 and player2), we alternate between updating each player's score
    if (diceResult % 2 === 0) {
      updatePlayerScore('player1', diceResult);
    } else {
      updatePlayerScore('player2', diceResult);
    }
  };

  return (
    <div className="dice-container">
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Dice;
