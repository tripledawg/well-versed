import React from 'react';
import './App.css';
import { useState } from 'react';

import GuessTitleByLyric from './components/GuessTitleByLyric';
import EndGame from './components/EndGame';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Login from './components/Login';

const userDataObject = {email: '', year: ''};

function App() {
  const [questionCount, setQuestionCount] = useState(0);//starts over the questions
  const [score, setScore] = useState(0);  //score logic starts with score of 0 
  const [userState, setUserState] = useState('new');
  const [userData, setUserData] = useState(userDataObject);

  // If the user is new or logged in, show the game component
  if (questionCount < 2 && (userState === 'loggedIn' || userState === 'new')) {  //sets limit of questions
    return <div>
        <Nav userData={userData} setUserData={setUserData} userState={userState} setUserState={setUserState}/>
        <GuessTitleByLyric userState={userState} setUserState={setUserState} score={score} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} />
      </div>;
  }
  // If the user is registering, show the signup component
  else if (userState === 'registering') {
    return <div>
        <Signup setUserData={setUserData} userState={userState} setUserState={setUserState} score={score} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} />
      </div>
  }
  // If the user is logging in, show the login component
  else if (userState === 'loggingIn') {
    return <div>
      <Login setUserData={setUserData} userState={userState} setUserState={setUserState} />
    </div>
  }
  // Otherwise, the game is over, show the endgame component
  else {
    return <div>
        <Nav userData={userData} setUserData={setUserData} userState={userState} setUserState={setUserState}/>
        <EndGame userState={userState} setUserState={setUserState} score={score} setScore={setScore} questionCount={questionCount} setQuestionCount={setQuestionCount} />
      </div>
  }
};

export default App;