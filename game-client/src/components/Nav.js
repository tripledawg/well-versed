import React from 'react';
import './Nav.css';

export default function Nav(props) {  ///passes in state information as a property of the user
    const login = () => {
        props.setUserState('loggingIn');
    }

    const logout = (event) => {
        event.preventDefault()
        fetch("/api/users/logout")
        .then((res) => {
            props.setUserState('new');
            props.setUserEmail('');
            props.setUserYear('');
        });
    }
//hide login button if logged in already, hide welcome msg if logged in, hide logout if new user
    return (
        <div>
            <button hidden={props.userState === 'loggedIn'} onClick={login}>Login</button> 
            <p hidden={props.userState !== 'loggedIn'} >Welcome, {props.userEmail}, born in {props.userYear}!</p>
            <button hidden={props.userState === 'new' || props.userState === 'loggingIn'} onClick={logout} >Logout</button>
        </div>
    )
}