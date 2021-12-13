import { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { getMovies } from './actions/movie';

function App({ getMovies }) {
  useEffect(() => {
    getMovies();
  },
  // eslint-disable-next-line
  []);

  return (
    <div className="App">

    </div>
  );
}

const mapStateToProps= (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => {
    dispatch(getMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
