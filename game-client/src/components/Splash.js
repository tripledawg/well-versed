import React, { useState } from 'react';
import './Splash.css';

export default function Splash(props) {
    const startGame = () => {
        props.setUserState('new');
    }
    return (
        <div>
            <button onClick={startGame}>Start a game!</button>
        </div>
    )
}