import React, { useState } from 'react';
import './Splash.css';



export default function Splash(props) {
    const startGame = () => {
        props.setUserState('new');
    }
    return (
        
        <body id="background">
            <div id="container"className="container">
                <div>
                    <button id="button" onClick={startGame}>Start a game!</button>
                </div>
            </div>
        </body>


    )
}