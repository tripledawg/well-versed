import React from 'react';

// The Game component accepts props from App.js
// We pluck off the "lyric" property of the props object using destructuring assignment
// This prevents us from having to type `props.lyric` each time we want to refer to the lyric object

export default function Songs({ lyric }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/songLyrics")
      .then((res) => res.json())
      .then((data) => setData(data.songLyric.lyric));
  }, []);


  return (
    <div>
      <p>{!data ? "loading..." : data}</p>
    </div>
  );
}
