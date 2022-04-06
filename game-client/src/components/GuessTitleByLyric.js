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
  const handleAnswer1Change = () => {
    setValue("answer1");
  };
  const handleAnswer2Change = () => {
    setValue("answer2");
  };
  const handleAnswer3Change = () => {
    setValue("answer3");
  };
  const handleAnswer4Change = () => {
    setValue("answer4");
  };
  const handleAnswer5Change = () => {
    setValue("answer5");
  };
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

  const onSubmit = (e) => {
    console.log("reached on submit")
    e.preventDefault();
    if (data.aggregation[0].title + ' by ' + data.aggregation[0].artist === e) {
      // display feedback
      // assign and store points
      // draw a new component with a new question
      // check and increment the question counter or end game and post final score and user signup prompt
    }
  };


  return (
    <div id="background">
      <form onSubmit={onSubmit}>
        <h3>What song is this lyric from?</h3>
        <p>{!data ? "loading..." : data.aggregation[0].lyric}</p>
        <label><input type="radio" checked={value === "answer1"} onChange={handleAnswer1Change} /> {!randomizedData ? "loading..." : randomizedData[0].title} by {!randomizedData ? "loading..." : randomizedData[0].artist}</label><br></br>
        <label><input type="radio" checked={value === "answer2"} onChange={handleAnswer2Change} /> {!randomizedData ? "loading..." : randomizedData[1].title} by {!randomizedData ? "loading..." : randomizedData[1].artist}</label><br></br>
        <label><input type="radio" checked={value === "answer3"} onChange={handleAnswer3Change} /> {!randomizedData ? "loading..." : randomizedData[2].title} by {!randomizedData ? "loading..." : randomizedData[2].artist}</label><br></br>
        <label><input type="radio" checked={value === "answer4"} onChange={handleAnswer4Change} /> {!randomizedData ? "loading..." : randomizedData[3].title} by {!randomizedData ? "loading..." : randomizedData[3].artist}</label><br></br>
        <label><input type="radio" checked={value === "answer5"} onChange={handleAnswer5Change} /> {!randomizedData ? "loading..." : randomizedData[4].title} by {!randomizedData ? "loading..." : randomizedData[4].artist}</label><br></br>

        <button type="submit">Submit</button> </form>  {/*added */}
    </div>
  );
}


export default GuessTitleByLyric;