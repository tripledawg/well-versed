import React from 'react';
import './Signup.css';

export default function Signup(props) {
    const resetGame = () => {
        props.setQuestionCount(0);
        props.setScore(0);
    }

    const createUser = (event) => {
        event.preventDefault();
        resetGame();
        fetch("/api/songLyrics")
        .then((res) => res.json())
        .then((data) => {
          setData(data);  //all raw data 
          setValue(null);
          var randomArray = [];
          for (let i = 0; i < data.aggregation.length; i++) {   //array called "aggregation"
            randomArray[i] = data.aggregation[i];
          }
          shuffleArray(randomArray);
          setRandomizedData(randomArray);
        });
    }

    return (
        <div><form onSubmit={createUser}>
            <input type="text" ref={inputRef} placeholder="email" />
            <input type="text" ref={inputRef} placeholder="password" />
            <input type="text" ref={inputRef} placeholder="year of birth" />
            <button type="submit" value="submit">Signup</button>
        </form >
        </div>
    );
}
