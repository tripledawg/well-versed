import React, { useState } from 'react';
import './Signup.css';


export default function Login(props) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const loginUser = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': email, 'password': password })
        };
        fetch("/api/users/login", requestOptions)
            .then((res) => res.json())
            .then((jsonData) => {
                props.setUserState('loggedIn');
                props.setUserEmail(jsonData.email);
                props.setUserYear(jsonData.year)
            }).catch((err) => err.json());;
    }
//how to use theloggedIn endpoint???

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    // const resetGame = (event) => {
    //     setUserState('new');
    //     props.resetGame(event.target.value)
    // };
    //    

    return (
        <div className="container" style={{ backgroundColor: 'orange' }}>
            <div id="loginBox">
                <p style={{ fontSize: '15pt' }}>Please Login:  </p>
                <input onChange={handleEmail} placeholder="Email" />
                <input type="password" onChange={handlePassword} placeholder="Password" />
            </div>
            <br></br>
            <button id="button" onClick={loginUser}>Submit</button>
        </div>
    );
}


//<button id="button" onClick={resetGame}>Go Back to Play</button> go to guessTitleByLyric