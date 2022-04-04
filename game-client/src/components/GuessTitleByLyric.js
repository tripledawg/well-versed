import React from 'react';
import './GuessTitleByLyric.css';

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

// The Game component accepts props from App.js
// We pluck off the "lyric" property of the props object using destructuring assignment
// This prevents us from having to type `props.lyric` each time we want to refer to the lyric object

function GuessTitleByLyric({ lyric }) {
  const [data, setData] = React.useState(null);
  const [randomizedData, setRandomizedData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/songLyrics")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        var randomArray = [];
        for (let i = 0; i < data.aggregation.length; i++)
        {
          randomArray[i] = data.aggregation[i].title;
        }
        shuffleArray(randomArray);
        setRandomizedData(randomArray);
      });
  }, []);
  return (
      <div id="background">
        <h3>What song is this lyric from?</h3>
         <p> {!data ? "loading..." : data.aggregation[0].lyric}</p>
         <p> {!randomizedData ? "loading..." : randomizedData[0]}</p>
         <p> {!randomizedData ? "loading..." : randomizedData[1]}</p>
         <p> {!randomizedData ? "loading..." : randomizedData[2]}</p>
         <p> {!randomizedData ? "loading..." : randomizedData[3]}</p>
         <p> {!randomizedData ? "loading..." : randomizedData[4]}</p>
      </div>

  );
}

export default GuessTitleByLyric;