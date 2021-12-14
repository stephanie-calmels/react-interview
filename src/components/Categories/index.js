import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './categories.module.css';

import { getMoviesByCategories } from '../../actions/movie';

const Categories = ( { categories, getMoviesByCategories } ) => {
  let selectedCategories = [...categories];

  const getSelected = (category) => {
    let found = selectedCategories.find(item => item === category);
    if (!found) {
      selectedCategories.push(category);
    } else {
      selectedCategories = selectedCategories.filter(item => item !== category);
    }
    getMoviesByCategories(selectedCategories);
};

  return (
    <div className={styles['container']}>
      <ul className={styles['list']}>
        {
          categories.length > 0 &&
          categories.map(category => (
            <li key={category} className={styles['item']}>
              <input 
                type="checkbox" 
                name={category} 
                value={category}
                defaultChecked
                onChange={() => getSelected(category)}
              />
              <p className={styles['category']}>{category}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string,),
};

const mapStateToProps= (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getMoviesByCategories: (categories) => {
    dispatch(getMoviesByCategories(categories));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
