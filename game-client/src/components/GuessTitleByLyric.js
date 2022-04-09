import React, { useState, useEffect } from 'react';
import './GuessTitleByLyric.css';

/* Randomize multiple choice answer array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//adding points 
//function feedback


function GuessTitleByLyric() {
  const [data, setData] = useState(null);
  const [randomizedData, setRandomizedData] = useState(null);
  const [value, setValue] = useState(null);  //prevents a radio button from being selected at outset
  const [score, setScore] = useState(0);  //score logic
  
  const handleChange = (answer) => {
    setValue(answer);
  }

  useEffect(() => {
  setQuestion();
  }, []);
  const setQuestion = () => {
    fetch("/api/songLyrics")
    .then((res) => res.json())
    .then((data) => {
      setData(data);  //all raw data 
      var randomArray = [];
      for (let i = 0; i < data.aggregation.length; i++) {   //array called "aggregation"
        randomArray[i] = data.aggregation[i];
      }
      shuffleArray(randomArray);
      setRandomizedData(randomArray);
    });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(randomizedData[value].lyric);
    if (randomizedData[value].lyric === data.aggregation[0].lyric) {
      setScore(score + 1);
    }
   

    //store score in local storage
    //reset location of the radio button 
    //advance to next question, increment question number  
    else {
      console.log("wrong!");
      // no points
      // increment question counter
      // output clickable feedback component
    }
    setQuestion();//set limit of questions
  };

  localStorage.setItem("score", score)

  return (
    <div id="background">
      <form onSubmit={onSubmit}>
        <p>Score:{score}</p>
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