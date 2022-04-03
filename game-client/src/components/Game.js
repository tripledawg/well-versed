import React from 'react';
import './Game.css';

// The Game component accepts props from App.js
// We pluck off the "lyric" property of the props object using destructuring assignment
// This prevents us from having to type `props.lyric` each time we want to refer to the lyric object

function Game({ lyric }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/songLyrics")
      .then((res) => res.json())
      .then((data) => setData(data.aggregation[0].lyric));
  }, []);


  return (
      <div id="background">
        <p>{!data ? "loading..." : data}</p>
      </div>

  );
}

export default Game;