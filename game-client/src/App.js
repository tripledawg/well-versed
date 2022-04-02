import React from 'react';
import './App.css';

import Game from './components/Game';
import Nav from './components/Nav';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api") 
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  return (
    <div>
  <p>{!data ? "loading..." : data}</p>
  </div>
  );
}

export default App;
