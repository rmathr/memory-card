import React, { useState } from 'react';
import Card from './Card';

export default function MainBoard(props) {
  const [clickedElements, setClickedElements] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const defineBestScore = () => {};

  return (
    <div className="main-board">
      <Card
        incrementScore={props.incrementScore}
        // incrementBestScore={props.incrementBestScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/br.png"
      />
      <Card
        incrementScore={props.incrementScore}
        // incrementBestScore={props.incrementBestScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/ag.png"
      />
      <Card
        incrementScore={props.incrementScore}
        // incrementBestScore={props.incrementBestScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/ar.png"
      />
      <Card
        incrementScore={props.incrementScore}
        // incrementBestScore={props.incrementBestScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/vc.png"
      />
      <Card
        incrementScore={props.incrementScore}
        // incrementBestScore={props.incrementBestScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/pe.png"
      />
      <Card
        incrementScore={props.incrementScore}
        // incrementBestScore={props.incrementBestScore}
        setGameOver={props.setGameOver}
        url="https://flagcdn.com/w320/ng.png"
      />
    </div>
  );
}
