import React, { useState } from 'react';
import './Signup.css';


export default function Signup(props) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [year, setYear] = useState(null);
    const resetGame = () => {
        props.setQuestionCount(0);
        props.setScore(0);
    }

    const createUser = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': email, 'password': password, 'year': year})
        };
        fetch("/api/users", requestOptions)
            .then((res) => {
                props.setLoggedIn(res.loggedIn);
                resetGame();
            })
            .catch((err) => err.json());
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleYear = (event) => {
        setYear (event.target.value);
    };
   
    return (
        <div>
            <input onChange={handleEmail} placeholder="Email" />
            <input onChange={handlePassword} placeholder="Password" />
            <input onChange={handleYear} placeholder="Year of Birth" />
            <button onClick={createUser}>Submit</button>
        </div>
    );
}
