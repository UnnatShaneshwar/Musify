import React from "react";
import LibrarySong from "./LibrarySong";
const Library = ({ songs, setCurrentSong, audio, isPlaying }) => {
  const getSongs = (song) => {
    return (
      <>
        <LibrarySong
          key={song.id}
          songs={songs}
          song={song}
          setCurrentSong={setCurrentSong}
          audio={audio}
          isPlaying={isPlaying}
        />
      </>
    );
  };
  return (
    <>
      <div className="library">
        <h1>Library</h1>
        <div className="library-songs">{songs.map(getSongs)}</div>
      </div>
    </>
  );
};

export default Library;
