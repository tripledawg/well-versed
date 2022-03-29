import React from 'react';
import Game from './components/Game';
import Nav from './components/Nav';

// Import our list of users from users.js
import songs from './songs';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Nav />
      <Game />
    </div>
  );
}
