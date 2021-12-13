import React from 'react';

import PropTypes from 'prop-types';

import styles from './cardContainer.module.css';

const CardContainer = ({ children }) => {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  );
};

CardContainer.propTypes = {
  children: PropTypes.object,
};

export default CardContainer;
