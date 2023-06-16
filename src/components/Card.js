import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      props.setGameOver();
    } else {
      setIsClicked(true);
      const elemObj = { name: props.name };
      props.handleClickedElements(elemObj);
      props.incrementScore();
    }
  };

  return (
    <div className={styles.card}>
      <img className={styles.card_img} onClick={handleClick} src={props.url} />
      <p className={styles.card_text}>{props.name}</p>
    </div>
  );
};

export default Card;
