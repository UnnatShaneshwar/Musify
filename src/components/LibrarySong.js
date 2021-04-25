import React from "react";

const LibrarySong = ({ songs, song, setCurrentSong, audio, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audio.play();
          })
          .catch((err) => {
            document.write("An error occured\nMore info: " + err);
          });
      }
    }
  };
  return (
    <>
      <div
        onClick={songSelectHandler}
        className={`library-song ${song.active ? "selected-song" : ""}`}
      >
        <img src={song.cover} alt={song.name} />
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    </>
  );
};
export default LibrarySong;
