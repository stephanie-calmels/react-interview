import React, { useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import styles from './toggleThumbs.module.css';

import { addLike, addDislike } from '../../actions/movie';

const ToggleThumbs = ( { id, addLike, addDislike } ) => {

  let [like, setLike] = useState(true);
  let [note, setNote] = useState(false);

  return (
    <div className={styles['toggle_container']}>
      {
        like ?
        <FontAwesomeIcon 
          className={styles['icon']} 
          icon={faThumbsUp} 
          title="J'aime"
          onClick={() => {
            setNote(true);
            setLike(false);
            addLike(id, note);
          }}
        />
        :
        <FontAwesomeIcon
          className={styles['icon']} 
          icon={faThumbsDown}
          title="Je n'aime pas"
          onClick={() => {
            setNote(true);
            setLike(true);
            addDislike(id, note);
          }}
        />
      }
    </div>
     
  );
};

ToggleThumbs.propTypes = {
  id: PropTypes.string,
  addLike: PropTypes.func,
  addDislike: PropTypes.func,
};

const mapStateToProps= (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id, note) => {
    dispatch(addLike(id, note));
  },
  addDislike: (id, note) => {
    dispatch(addDislike(id, note));
  }

});


export default connect(mapStateToProps, mapDispatchToProps)(ToggleThumbs);
