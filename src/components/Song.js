import React from "react";

const Song = ({ currentSong }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <img src={currentSong.cover} alt={currentSong.name} className="w-full rounded-full" />
        <h1 className="pt-5 font-semibold text-4xl">{currentSong.name}</h1>
        <h3 className="">{currentSong.artist}</h3>
      </div>
    </>
  );
};

export default Song;
