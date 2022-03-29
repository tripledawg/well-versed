import React from 'react';

// The Game component accepts props from App.js
// We pluck off the "lyric" property of the props object using destructuring assignment
// This prevents us from having to type `props.lyric` each time we want to refer to the lyric object
export default function Songs({ lyric }) {
  return (
    <div className="container">
      <h1>Lyric:</h1>
      <ul className="lyric">
        {/* RANDOM LYRIC */}
          <li key={songs.lyric}>
            {`${songs.lyric}`}
          </li>
      </ul>
    </div>
  );
}
