import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getMovies } from './actions/movie';

import CardContainer from './components/CardContainer';
import Card from './components/Card';

function App({ getMovies, movies }) {
  useEffect(() => {
    getMovies();
  },
  // eslint-disable-next-line
  []);

  return (
    <div className="App">
      <CardContainer>
        { movies.length > 0 && 
          movies.map(movie => (
            <Card
              key={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
            />   
          ))
        }
      </CardContainer>
    </div>
  );
}

const mapStateToProps= (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => {
    dispatch(getMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
