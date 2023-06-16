import React, { useEffect, useState } from 'react';
import styles from './MainBoard.module.css';
import Card from './Card';
import charactersArray from './handleImages';
import _ from 'lodash';

export default function MainBoard(props) {
  const [clickedElements, setClickedElements] = useState([]);
  //   const [bestScore, setBestScore] = useState(0);
  const [index, setIndex] = useState(0);

  let imagesArray = charactersArray.map((arr) => arr.slice());

  const handleClickedElements = (elem) => {
    setClickedElements(clickedElements.concat(elem));
  };

  const cleanClickedElements = () => {
    setClickedElements([]);
  };

  let cards;

  const incrementIndex = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    if (clickedElements.length >= imagesArray[index].length && index < 5) {
      incrementIndex();
      cleanClickedElements();
    }
    console.log(clickedElements);
  }, [clickedElements, index]);

  //   imagesArray[index] = _.shuffle(imagesArray[index]);

  cards = imagesArray[index].map((obj) => {
    return (
      <Card
        key={obj.text}
        handleClickedElements={handleClickedElements}
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url={obj.image}
        name={obj.text}
      />
    );
  });

  return (
    <div className={styles.main_board_container}>
      <div className={index > 4 ? styles.main_board_flex : styles.main_board}>
        {cards}
      </div>
    </div>
  );
}
