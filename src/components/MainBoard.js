import React, { useEffect, useState } from 'react';
import styles from './MainBoard.module.css';
import Card from './Card';
import charactersArray from './handleImages';
import _ from 'lodash';

export default function MainBoard(props) {
  const [clickedElements, setClickedElements] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [index, setIndex] = useState(0);

  let imagesArray = charactersArray.map((arr) => arr.slice());
  //   console.log(imagesArray);
  //   console.log(charactersArray);

  const handleClickedElements = (elem) => {
    setClickedElements(clickedElements.concat(elem));
  };

  const cleanClickedElements = () => {
    setClickedElements([]);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let cards;
  const flagsBase = [
    // [meeseeks, morty, summer, rick, poopybutthole],
    ['br', 'ag', 'ar', 'vc', 'pe', 'ng'],
    ['tf', 'pa', 'cr', 'at', 're', 'fr', 'us', 'ua'],
    ['bt', 'bv', 'cu', 'cx', 'dz', 'fj', 'hm', 'iq', 'li', 'mq'],
  ];

  //   shuffleArray(flagsBase[0]);
  //   shuffleArray(imagesArray[0]);
  //   imagesArray[0] = _.shuffle(imagesArray[0]);

  const incrementIndex = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    if (clickedElements.length >= imagesArray[index].length) {
      incrementIndex();
      cleanClickedElements();
    }
    console.log(clickedElements);
  }, [clickedElements, index]);

  //   imagesArray[index] = _.shuffle(imagesArray[index]);

  //   useEffect(() => {
  //     if (clickedElements.length >= flagsBase[index].length) {
  //       incrementIndex();
  //       cleanClickedElements();
  //     }
  //     console.log(clickedElements);
  //   }, [clickedElements, index]);

  //   cards = flagsBase[index].map((url) => {
  cards = imagesArray[index].map((obj) => {
    return (
      <Card
        key={obj.text}
        handleClickedElements={handleClickedElements}
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url={obj.image}
        // url={`https://flagcdn.com/w320/${url}.png`}
        name={obj.text}
      />
    );
  });

  return (
    <div className={index > 4 ? styles.main_board_flex : styles.main_board}>
      {cards}
      {/* <Card
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/br.png"
      />
      <Card
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/ag.png"
      />
      <Card
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/ar.png"
      />
      <Card
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/vc.png"
      />
      <Card
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/pe.png"
      />
      <Card
        incrementScore={props.incrementScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/ng.png"
      /> */}
    </div>
  );
}

//   const flagsBase = [
//     {
//       url: 'https://flagcdn.com/w320/br.png',
//     },
//     {
//       url: 'https://flagcdn.com/w320/ag.png',
//     },
//     {
//       url: 'https://flagcdn.com/w320/ar.png',
//     },
//     {
//       url: 'https://flagcdn.com/w320/vc.png',
//     },
//     {
//       url: 'https://flagcdn.com/w320/pe.png',
//     },
//     {
//       url: 'https://flagcdn.com/w320/ng.png',
//     },
//   ];
