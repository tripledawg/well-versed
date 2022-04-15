import React from 'react';
import './EndGame.css';

export default function EndGame(props) {
  const resetGame = () => {
    props.setQuestionCount(0);
    props.setScore(0);
  }

  const createUser = () => {
    props.setUserState('registering');
  }

  return (
    <div className="container" style={{ backgroundColor: 'rgb(216, 85, 62)'}}><p style={{fontSize: '25pt', color:'lightYellow'}}>Game Over! <br></br>Final Score: {props.score}</p>
      <button id="button" hidden={props.userState !== 'new'} onClick={createUser}>Sign up for custom games?</button>
      <button id="button" onClick={resetGame}>Play Again</button>
    </div>
  );
}
