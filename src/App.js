import React, { useState, useRef } from "react";
import "./styles/App.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./MusicDB";
import Library from "./components/Library";
import NavBar from "./components/NavBar";

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(
    songs[Math.floor(Math.random() * songs.length)]
  );
  songs.forEach((song) => {
    if (song.id === currentSong.id) {
      song.active = true;
    } else {
      song.active = false;
    }
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audio = audioRef.current;
  const [songInfo, setSongInfo] = useState({
    currTime: 0,
    duration: 0,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime,
      duration = e.target.duration;
    setSongInfo({ ...songInfo, currTime: current, duration });
  };

  return (
    <>
      <div className="App">
        <NavBar
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} />
        <Player
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSong={currentSong}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          audio={audio}
        />
        <Library
          songs={songs}
          setCurrentSong={setCurrentSong}
          audio={audio}
          isPlaying={isPlaying}
          libraryStatus={libraryStatus}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </>
  );
};

export default App;
