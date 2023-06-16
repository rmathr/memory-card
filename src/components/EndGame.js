import React from 'react';
import styles from './Gameover.module.css';
import styles2 from './EndGame.module.css';
import rick_portal from '../assets/images/rick-portal.png';

const EndGame = (props) => {
  return (
    <div className={styles.gameover}>
      <div className={styles2.endgame_container}>
        <div className={styles.gameover_message}>
          <img src={rick_portal} />
          <p>Congratulations, you win!</p>
        </div>
        <button onClick={props.handleWin} className={styles.restart_button}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
              fill="currentColor"
              className={styles.svg_restart}
            >
              <path d="M451-122q-123-10-207-101t-84-216q0-77 35.5-145T295-695l43 43q-56 33-87 90.5T220-439q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741-439q0-109-75.5-184.5T481-699h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801-439q0 125-83.5 216T511-122Z" />
            </svg>
            <span></span>
            Play Again
          </span>
        </button>
      </div>
    </div>
  );
};

export default EndGame;
