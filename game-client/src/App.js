import React from 'react';
import './App.css';
import { useState } from 'react';

import GuessTitleByLyric from './components/GuessTitleByLyric';
import EndGame from './components/EndGame';


function App() {
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);  //score logic
  localStorage.setItem("score", score)

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