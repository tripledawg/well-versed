import React from 'react';
import './EndGame.css';

export default function EndGame(props) {
  const resetGame = () => {
    props.setQuestionCount(0);
    props.setScore(0);
  }

  const createUser = () => {

  }
  return (
  <div><p>Game Over! Final Score: {props.score}</p>
  {/* <button onCLick={createUser}>Sign up for custom games?</button> */}
  <button onClick={resetGame}>Play Again</button>
  </div>    
  );
}
