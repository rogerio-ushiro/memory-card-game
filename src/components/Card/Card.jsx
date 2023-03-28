import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const name = props.name;
  const [flip, setFlip] = useState(false);
  const [matched, setMatched] = useState(false);

  const sendToParent = (evt) => {
    props.selectedCard({
      name: name,
      obj: evt.currentTarget,
      flip: () => {
        setFlip(true);
      },
      unflip: () => {
        setFlip(false);
      },
      matched: () => {
        setMatched(true);
      },
    });
  };

  return (
    <div
      className={`memory-card ${flip ? "flip" : ""}`}
      onClick={matched ? null : sendToParent}
    >
      <img
        className={`front-face ${matched ? "matched" : ""}`}
        src={`../img/${name.toLowerCase()}.jpg`}
        alt={name}
      />
      <img
        className="back-face"
        src={`../img/${props.cover}.jpg`}
        alt="verso"
      />
    </div>
  );
};

export default Card;
