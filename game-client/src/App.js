import React from 'react';
import './App.css';
import { useState } from 'react';

import GuessTitleByLyric from './components/GuessTitleByLyric';
import EndGame from './components/EndGame';


function App() {
  const [questionCount, setQuestionCount] = useState(0);//starts over the questions
  const [score, setScore] = useState(0);  //score logic starts with score of 0 
  localStorage.setItem("score", score)  //stores scores

  if (questionCount < 2) {  //sets limit of questions
    return <div>
      <GuessTitleByLyric score={score} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} /> </div>;
  }
  else {
    return <div>
    <EndGame score={score} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} />
    </div>
  }
};

export default App;