import { useEffect } from 'react';
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

  return (
    <div className="App">
      <Categories />
      <CardContainer>
        { 
          filteredMovies.length > 0 ?
            filteredMovies.map(movie => (
              <Card
                key={movie.id}
                title={movie.title}
                category={movie.category}
                likes={movie.likes}
                dislikes={movie.dislikes}
                id={movie.id}
              />   
            )) 
          :
          movies.length > 0 && 
          movies.map(movie => (
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
