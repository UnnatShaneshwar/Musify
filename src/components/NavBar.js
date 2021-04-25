import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <span>Musify</span>
        <button>Library <FontAwesomeIcon  icon={faMusic} size="1x" /></button>
      </nav>
    </>
  );
};

export default NavBar;
