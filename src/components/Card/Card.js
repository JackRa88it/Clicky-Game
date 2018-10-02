import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <img alt={props.cards[0].name} src={props.cards[0].img} data-id={props.cards[0].name} />
  </div>
);

export default Card;