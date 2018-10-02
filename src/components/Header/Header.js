import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <div className="header">
      <h1>Score: {props.score}</h1>
      <h1>High Score: {props.highScore}</h1>
    </div>
  )
}

export default Header;
