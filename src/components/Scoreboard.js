import React from 'react';
import rick_icon from '../assets/icons/rick-icon.png';
import styles from './Scoreboard.module.css';

export default function Scoreboard(props) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.left_container}>
        <div className={styles.brand_container}>
          <img className={styles.brand_img} src={rick_icon} />
          <p className={styles.brand_text}>memorick</p>
        </div>
      </div>

      <div className={styles.right_container}>
        <div className={styles.scores_container}>
          <p className={styles.show_score}>Score: {props.score}</p>
          <p className={styles.show_score}>Best Score: {props.bestScore}</p>
        </div>
      </div>
    </div>
  );
}
