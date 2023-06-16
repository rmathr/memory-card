import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const [img, setImg] = useState(url);
  const [isClicked, setIsClicked] = useState(false);
  //   console.log(props);

  const url = props.url;
  //   console.log(img);
  // const fetchUrl = async (url) => {
  //     fetch(url).
  // }

  const handleClick = () => {
    console.log(isClicked);
    if (isClicked) {
      props.setGameOver();
      //   props.incrementBestScore();
    } else {
      setIsClicked(true);
      const elemObj = { name: props.name };
      props.handleClickedElements(elemObj);
      props.incrementScore();
      //end game
    }
  };

  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    // console.log(imageObjectURL);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    // fetchImage();
  }, []);

  return (
    // <div>aaa</div>
    // <img src={img} />
    // <div className="cards">
    <div className={styles.card}>
      <img className={styles.card_img} onClick={handleClick} src={url} />
      <p className={styles.card_text}>{props.name}</p>
    </div>
  );
};

export default Card;
