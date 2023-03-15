import Card from "./Card";
import "./Collection.css";

const cards = ["aurelia", "vue", "angular", "ember", "backbone", "react"];
let enabledClick = true;
let firstCard, secondCard;

const Collection = (props) => {
  // Added a duplicate card collection with uppercase names to avoid accidental matches by double-clicking, then shuffle all.
  const shuffledArray = cards.concat(cards.map((value) => value.toUpperCase()));
  // .sort((a, b) => 0.5 - Math.random());

  // select the card
  const selectedCard = (obj) => {
    if (enabledClick) {
      obj.flip();

      if (firstCard == null) {
        firstCard = obj;
      } else {
        secondCard = obj;
        enabledClick = false;
        setTimeout(() => {
          enabledClick = true;
        }, 1500);
      }

      // if second card is selected, call a comparison
      if (secondCard != null) checkForMatch();
    }
  };

  // check if both are a match
  function checkForMatch() {
    if (
      // Check if names differ to distinguish cards (avoid double selecting same card),/ but compare in uppercase to check for equality.
      firstCard.name !== secondCard.name &&
      firstCard.name.toUpperCase() === secondCard.name.toUpperCase()
    ) {
      setTimeout(() => {
        firstCard.matched();
        secondCard.matched();
        [firstCard, secondCard] = [null, null, null, null];
        enabledClick = true;
        props.notificationTrigger();
      }, 400);
    } else {
      setTimeout(() => {
        firstCard.unflip();
        secondCard.unflip();
        enabledClick = true;
        [firstCard, secondCard] = [null, null, null, null];
      }, 800);
    }
  }

  return (
    <>
      {shuffledArray.map((item, index) => (
        <Card name={item} key={item + index} selectedCard={selectedCard}></Card>
      ))}
    </>
  );
};

export default Collection;
