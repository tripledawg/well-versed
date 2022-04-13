import React from 'react';
import './App.css';
import { useState } from 'react';

import GuessTitleByLyric from './components/GuessTitleByLyric';
import EndGame from './components/EndGame';
import Signup from './components/Signup';


function App() {
  const [questionCount, setQuestionCount] = useState(0);//starts over the questions
  const [score, setScore] = useState(0);  //score logic starts with score of 0 
  localStorage.setItem("score", score);  //stores scores
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (questionCount < 2) {  //sets limit of questions
    return <div>
      <GuessTitleByLyric loggedIn={loggedIn} setLoggedIn={setLoggedIn} score={score} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} /> </div>;
  }
  //no register buttonn if already logged in 
  else if (register && !loggedIn) {
    return <div><Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} register={register} setRegister={setRegister} score={score} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} /></div>
  }
  else {
    return <div>
      <EndGame score={score} loggedIn={loggedIn} setLoggedIn={setLoggedIn} register={register} setRegister={setRegister} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} />
    </div>
  }
};

export default App;