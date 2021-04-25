import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audio,
  songInfo,
  setSongInfo,
}) => {
  const playSongHandler = () => {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audio.pause();
    } else {
      setIsPlaying(!isPlaying);
      audio.play();
    }
  };

  const formatTime = (time) => {
    const formatedTime = `${("0" + Math.floor(time / 60)).slice(-2)}:${(
      "0" + Math.floor(time % 60)
    ).slice(-2)}`;
    return formatedTime;
  };

  const inputSliderDragHandler = (e) => {
    const val = e.target.value;
    audio.currentTime = val;
    setSongInfo({ ...songInfo, currTime: val });
  };

  return (
    <>
      <div className="player">
        <div className="time-control">
          <p className="start-time">{formatTime(songInfo.currTime)}</p>
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currTime}
            onChange={inputSliderDragHandler}
            type="range"
          />
          <p className="end-time">{formatTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
          <FontAwesomeIcon
            className="skip-backward"
            icon={faAngleLeft}
            size="2x"
          />
          <FontAwesomeIcon
            onClick={playSongHandler}
            className="play"
            icon={isPlaying ? faPause : faPlay}
            size="2x"
          />
          <FontAwesomeIcon
            className="skip-forward"
            icon={faAngleRight}
            size="2x"
          />
        </div>
      </div>
    </>
  );
};

export default Player;
