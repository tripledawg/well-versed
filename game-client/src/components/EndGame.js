import React from 'react';
import './EndGame.css';

export default function EndGame(props) {
  return (
  <div><p>Game Over! Final Score: {props.score}</p>
  {/* <a>Sign up for custom games?</a>
  <a>Play Again</a> */}
  </div>    
  );
}
