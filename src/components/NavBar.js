import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <>
      <nav className="nav-bar flex justify-between px-4 py-2">
        <span className="text-4xl font-bold text-gray-700">Musify</span>
        <button
          className="rounded-xl border border-gray-900 bg-gray-800 text-white outline-none px-5 py-2 hover:bg-transparent hover:text-gray-800 transition"
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          Library <FontAwesomeIcon icon={faMusic} size="1x" />
        </button>
      </nav>
    </>
  );
};

export default NavBar;
