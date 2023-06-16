import React, { useEffect, useState } from 'react';
import Scoreboard from './Scoreboard';
import MainBoard from './MainBoard';
import Footer from './Footer';
import Gameover from './Gameover';
import EndGame from './EndGame';

const App = (props) => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestCore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const incrementBestScore = () => {
    if (bestScore === 0) {
      setBestCore(score);
    }
    if (bestScore > 0) {
      if (bestScore < score) {
        setBestCore(score);
      }
    }
  };

  const settleGameOver = () => {
    setGameOver(true);
  };

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
  };

  const handleWin = () => {
    setScore(0);
    setBestCore(0);
  };

  useEffect(() => {
    incrementBestScore();
  }, [score]);

  return (
    <div className="main-container">
      <Scoreboard score={score} bestScore={bestScore} />
      {!gameOver && bestScore < 58 && (
        <MainBoard
          incrementScore={incrementScore}
          setGameOver={settleGameOver}
          gameOver={gameOver}
        />
      )}
      {gameOver && <Gameover restartGame={restartGame} bestScore={bestScore} />}

      {bestScore == 58 && <EndGame handleWin={handleWin} />}

      <Footer />
    </div>
  );
};

export default App;
