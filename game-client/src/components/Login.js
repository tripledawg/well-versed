import React, { useState } from 'react';
import './Signup.css';


export default function Login(props) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const loginUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': email, 'password': password })
        };
        fetch("/api/users/:email", requestOptions)
            .then((res) => {
                props.setUserState('loggedIn');
                props.setUserData(res.userData);
            }).catch((err) => err.json());;
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <p>Please Login:  </p>
            <input onChange={handleEmail} placeholder="Email" />
            <input onChange={handlePassword} placeholder="Password" />
            <button onClick={loginUser}>Submit</button>
        </div>
    );
}
