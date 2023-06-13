import React from 'react';

export default function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <p className="show-score">Score: {props.score}</p>
      <p className="show-score">Best Score: {props.bestScore}</p>
    </div>
  );
}
