import React, { useEffect, useState } from 'react';
import Scoreboard from './Scoreboard';
import MainBoard from './MainBoard';

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

  useEffect(() => {
    incrementBestScore();
  }, [score]);

  return (
    <div className="main-container">
      <Scoreboard score={score} bestScore={bestScore} />
      {!gameOver && (
        <MainBoard
          incrementScore={incrementScore}
          //   incrementBestScore={incrementBestScore}
          setGameOver={settleGameOver}
          gameOver={gameOver}
        />
      )}
      {gameOver && (
        <div className="game-over">
          <p>Game over!</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default App;
