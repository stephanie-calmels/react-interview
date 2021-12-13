import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import styles from './card.module.css';

const Card = ({ title, category, likes, dislikes }) => {
  const barWidth = likes / (likes + dislikes) * 100;
  return (
    <div className={styles['card']}>
      <p className={styles['title']}>{title}</p>
      <p className={styles['category']}>{category}</p>
      <div className={styles['bar']}>
        <div className={styles['bar--full']} style={{width: barWidth}}></div>
      </div>
      <p className={styles['likes']}>
        <FontAwesomeIcon className={styles['icon']} icon={faThumbsUp} />
        {likes}
      </p>
      <p className={styles['dislikes']}>
        <FontAwesomeIcon className={styles['icon']} icon={faThumbsDown} />
        {dislikes}
      </p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
};

export default Card;
