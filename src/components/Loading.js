import React from 'react';
import styles from './Loading.module.css';
import rick from '../assets/icons/rick-icon.png';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <p>Loading...</p>
      <img src={rick} className={styles.loading_img} />
    </div>
  );
}
