import React from 'react';
import './GuessTitleByLyric.css';

/* Randomize nultiple choice answer array in-place using Durstenfeld shuffle algorithm */
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
  const [value, setValue] = React.useState(null);  //prevents a radio button from being selected at outset
  // const handleChange = () => {
  //   setValue(false);
  // };

  const handleChange = (answer) => {
    setValue(answer);
  }

  React.useEffect(() => {
    fetch("/api/songLyrics")
      .then((res) => res.json())
      .then((data) => {
        setData(data);  //all raw data 
        var randomArray = [];
        for (let i = 0; i < data.aggregation.length; i++) {   //array is called "aggregation"
          randomArray[i] = data.aggregation[i];
        }
        shuffleArray(randomArray);
        setRandomizedData(randomArray);
      });
  }, []);




  const onSubmit = () => {
    console.log(randomizedData[value].lyric);
    if (randomizedData[value].lyric === data.aggregation[0].lyric) {
      console.log("correct!");
      // assign points
      // increment question counter
      // output clickable feedback component
    }
    else{
      console.log("wrong!");
      // no points
      // increment question counter
      // output clickable feedback component
    }
  };


  return (
    <div id="background">
      <form onSubmit={onSubmit}>
        <h3>What song is this lyric from?</h3>
        <p>{!data ? "loading..." : data.aggregation[0].lyric}</p>
        <label><input type="radio" name="titleArtist" checked={value === 0} onChange={(e) => handleChange(0, e)} /> {!randomizedData ? "loading..." : randomizedData[0].title} by {!randomizedData ? "loading..." : randomizedData[0].artist}</label><br></br>
        <label><input type="radio" name="titleArtist" checked={value === 1} onChange={(e) => handleChange(1, e)} /> {!randomizedData ? "loading..." : randomizedData[1].title} by {!randomizedData ? "loading..." : randomizedData[1].artist}</label><br></br>
        <label><input type="radio" name="titleArtist" checked={value === 2} onChange={(e) => handleChange(2, e)} /> {!randomizedData ? "loading..." : randomizedData[2].title} by {!randomizedData ? "loading..." : randomizedData[2].artist}</label><br></br>
        <label><input type="radio" name="titleArtist" checked={value === 3} onChange={(e) => handleChange(3, e)} /> {!randomizedData ? "loading..." : randomizedData[3].title} by {!randomizedData ? "loading..." : randomizedData[3].artist}</label><br></br>
        <label><input type="radio" name="titleArtist" checked={value === 4} onChange={(e) => handleChange(4, e)} /> {!randomizedData ? "loading..." : randomizedData[4].title} by {!randomizedData ? "loading..." : randomizedData[4].artist}</label><br></br>
        <button type="submit">Submit</button> </form>
    </div>
  );
}


export default GuessTitleByLyric;