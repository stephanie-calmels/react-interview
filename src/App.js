import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getMovies } from './actions/movie';

import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Categories from './components/Categories';

function App({ getMovies, movies, filteredMovies }) {
  useEffect(() => {
    getMovies();
  },
  // eslint-disable-next-line
  []);

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [itemOffset, setItemOffset] = useState(0);
  let currentMovies = [];

  const endOffset = itemOffset + itemsPerPage;
  if (filteredMovies.length > 0) {
    currentMovies = filteredMovies.slice(itemOffset, endOffset);
  } else if (movies.length > 0 ) {
    currentMovies = movies.slice(itemOffset, endOffset);
  }

  const handleClick = (direction) => { 
    let newOffset;
    if (direction === 'previous') {
      newOffset = itemOffset - itemsPerPage;
      if (newOffset < 0) {
        setItemOffset(0);
      } else {
        setItemOffset(newOffset);
      }
    }

    if (direction === 'next') {
      newOffset = itemOffset + itemsPerPage;
      if (newOffset > movies.length) {
        setItemOffset(itemOffset);
      } else {
        setItemOffset(newOffset);
      }
    }

  }

  return (
    <div className="App">
      <Categories />
      <CardContainer>
        {
          currentMovies.length > 0 && 
          currentMovies.map(movie => (
            <Card
              key={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
              id={movie.id}
            />   
          )) 

        }
      </CardContainer>

      <div className='paging'>

        <div className='buttons'>
          <button 
            className='button'
            onClick={() => handleClick('previous')}
          >
            Précédent
          </button>

          <button 
            className='button'
            onClick={() => handleClick('next')}
          >
            Suivant
          </button>
        </div>

        <div className='items'>
          <p>Nombre d'éléments par page :</p>
          <div>
              <input 
                type="radio" 
                id='4' 
                name='item' 
                value={4}
                defaultChecked
                onChange={() => setItemsPerPage(4)}
                />
              <label htmlFor='4'>4</label> 

              <input 
                type="radio" 
                id='8' 
                name='item' 
                value={8}
                onChange={() => setItemsPerPage(8)}
                />
              <label htmlFor='8'>8</label>

              <input 
                type="radio" 
                id='12'
                name='item'
                value={12}
                onChange={() => setItemsPerPage(12)}
                />
              <label htmlFor='12'>12</label>
          </div>
        </div>

        </div>

    </div>
  );
}

const mapStateToProps= (state) => ({
  movies: state.movies,
  filteredMovies: state.filteredMovies
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => {
    dispatch(getMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
