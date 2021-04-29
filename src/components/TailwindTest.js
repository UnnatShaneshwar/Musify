import React from "react";
import "../styles/main.css";

const TailwindTest = () => {
  return (
    <>
      <div className="my-4 mx-9">
        <h1 className="text-6xl m-3">Hello everyone, Tailwind here!</h1>
        <button className="btn m-3">Click</button>
        <a
          href="https://www.tailwindcss.com"
          className="m-3 underline text-blue-500 hover:text-blue-700 transition"
        >
          tailwindcss.com
        </a>
      </div>
    </>
  );
};

export default TailwindTest;
