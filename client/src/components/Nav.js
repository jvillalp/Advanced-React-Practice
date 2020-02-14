import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode("Dark Mode", false);
  //toggle
    const toggleBtn =event => {
        event.preventDafault();
        setDarkMode(!darkMode);
    };
  const lightMoon = (
    <span role="img" aria-label="light mode moon emoji">
      🌝
    </span>
  );
  const darkMoon = (
    <span role="img" aria-label="dark mode moon emoji">
      🌚
    </span>
  );

  return (
    <div className="navbar">
      <h1 className="nav-title"> Soccer Players - Rankings</h1>
      <button onClick={toggleBtn}>{darkMode ? lightMoon : darkMoon}</button>
    </div>
  );
};

export default Nav;
