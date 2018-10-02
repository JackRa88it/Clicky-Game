import React from "react";
import "./Game.css";
import Header from "../Header";
import Card from "../Card";

class Game extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    cards: [
      {
        name: "Buttercup",
        img: "https://vignette.wikia.nocookie.net/characters/images/d/d2/Buttercup_%28The_Powerpuff_Girls_2016%29.png/revision/latest/scale-to-width-down/270?cb=20171005170632",
        picked: false
      },
      {
        name: "Bubbles",
        img: "https://vignette.wikia.nocookie.net/characters/images/a/a8/Bubbles_%28The_Powerpuff_Girls_2016%29.png/revision/latest/scale-to-width-down/280?cb=20171005164445",
        picked: false
      },
      {
        name: "Blossom",
        img: "https://vignette.wikia.nocookie.net/characters/images/4/42/Blossom_%28The_Powerpuff_Girls_1998%29.png/revision/latest/scale-to-width-down/230?cb=20171005165705",
        picked: false
      },
      {
        name: "Dee Dee",
        img: "https://vignette.wikia.nocookie.net/characters/images/f/fc/Deedee.png/revision/latest?cb=20150316235227",
        picked: false
      },
      {
        name: "Dexter",
        img: "https://vignette.wikia.nocookie.net/p__/images/1/10/225px-Dexter2.png/revision/latest?cb=20120711215235&path-prefix=protagonist",
        picked: false
      },
      {
        name: "Monkey",
        img: "https://vignette.wikia.nocookie.net/vsbattles/images/2/27/Monkey.png/revision/latest?cb=20170116053202",
        picked: false
      }
    ]
  };

  clickCard = (name, picked) => {
    if (!picked) {
      let newCards = this.state.cards.map(card => {
        if (card.name === name) {
          card.picked = true;
        }
        return card;
      });
      this.setState({
        score: this.state.score + 1,
        cards: newCards
      });
    } else {
      let newCards = this.state.cards.map(card => {
        card.picked = false;
        return card;
      });
      let newHighScore = this.state.highScore;
      if (this.state.score > this.state.highScore) {
        newHighScore = this.state.score
      }
      this.setState({
        score: 0,
        highScore: newHighScore,
        cards: newCards
      });
    }
  
  };

  render() {
    return (
      <div>
        <Header 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div className="cards-container">
          {this.state.cards.map(card => (
            <Card 
              key={card.name}
              name={card.name}
              img={card.img}
              picked={card.picked}
              clickCard={this.clickCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;

// Game (contains game state and all variables, parent of header and cards)
// Header (title, instructions, score/topscore)
// Card (mapped from game.state)