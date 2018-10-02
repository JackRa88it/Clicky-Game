import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <div className="header">
      <h1>Click Memory!</h1>
      <p>Click any card to begin. Avoid clicking the same card twice!</p>
      <h2>Score: {props.score} High Score: {props.highScore}</h2>
    </div>
  )
}

export default Header;
