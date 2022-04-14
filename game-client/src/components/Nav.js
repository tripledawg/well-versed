import React from 'react';
import './Nav.css';

export default function Nav(props) {
    const login = () => {
        props.setUserState('loggingIn');
    }

    const logout = () => {
        fetch("/api/users/logout")
        .then((res) => {
            props.setUserState('new');
            props.setUserData({email: '', year: ''});
            props.setQuestionCount(0);
            props.setScore(0);
        });
    }

    return (
        <div>
            <button hidden={props.userState === 'loggedIn'} onClick={login}>Login</button>
            <p hidden={props.userState !== 'loggedIn'} >Welcome, {props.userData.email}!</p>
            <button hidden={props.userState === 'new' || props.userState === 'loggingIn'} onClick={logout} >Logout</button>
        </div>
    )
}