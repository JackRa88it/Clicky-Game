import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <img alt={props.name} src={props.img} data-picked={props.picked} />
  </div>
);

export default Card;