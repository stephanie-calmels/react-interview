import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './card.module.css';

import { deleteMovie } from '../../actions/movie';

import ToggleThumbs from '../ToggleThumbs';

const Card = ({ title, category, likes, dislikes, id, deleteMovie }) => {
  const barWidth = likes / (likes + dislikes) * 100;

  return (
    <div className={styles['card']}>
      <p className={styles['title']}>{title}</p>
      <p className={styles['category']}>{category}</p>
      <div className={styles['bar']}>
        <div className={styles['bar--full']} style={{width: barWidth}}></div>
      </div>
      <p className={styles['likes']}>
        <FontAwesomeIcon 
          className={styles['icon']} 
          icon={faThumbsUp} 
          title="Likes"
        />
        {likes}
      </p>
      <p className={styles['dislikes']}>
        <FontAwesomeIcon 
          className={styles['icon']}
          icon={faThumbsDown}
          title="Dislikes"
        />
        {dislikes}
      </p>
      <ToggleThumbs id={id}/>
      <p className={styles['delete_button']}>
        <FontAwesomeIcon 
          icon={faTrashAlt} 
          title="Supprimer le film"
          style={{cursor: 'pointer'}}
          onClick={() => deleteMovie(id)}
        />
      </p>

    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  id: PropTypes.string,
  deleteMovie: PropTypes.func,
};

const mapStateToProps= (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (id) => {
    dispatch(deleteMovie(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
