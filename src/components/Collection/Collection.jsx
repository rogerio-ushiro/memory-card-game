import { forwardRef } from "react";
import Card from "../Card/Card";
import "./Collection.css";

var cover = process.env.REACT_APP_COVER;

let enabledClick = true;
let firstCard, secondCard;

const Collection = forwardRef((props, ref) => {
  // Added a duplicate card collection with uppercase names to avoid accidental matches by double-clicking, then shuffle all.
  // .sort((a, b) => 0.5 - Math.random());

  // select the card
  const selectedCard = (obj) => {
    if (enabledClick) {
      obj.flip();
      if (firstCard == null) {
        firstCard = obj;
      } else {
        secondCard = obj;
        checkForMatch();
      }
    }
  };

  // check if both are a match
  function checkForMatch() {
    enabledClick = false;
    if (
      // Check if names differ to distinguish cards (avoid double selecting same card),/ but compare in uppercase to check for equality.
      firstCard.name !== secondCard.name &&
      firstCard.name.toUpperCase() === secondCard.name.toUpperCase()
    ) {
      setTimeout(() => {
        firstCard.matched();
        secondCard.matched();
        [firstCard, secondCard] = [null, null, null, null];
        props.dispatch({ type: "correct" });
      }, 200);
    } else {
      setTimeout(() => {
        firstCard.unflip();
        secondCard.unflip();
        [firstCard, secondCard] = [null, null, null, null];
      }, 800);
    }
    setTimeout(() => {
      enabledClick = true;
    }, 850);
  }

  return (
    <>
      {props.state.cards.map((item, index) => (
        <Card
          name={item}
          key={item + index}
          cover={cover}
          selectedCard={selectedCard}
        ></Card>
      ))}
    </>
  );
});

export default Collection;
