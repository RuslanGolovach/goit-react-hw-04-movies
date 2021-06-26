import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import routes from './routes';

const App = () => {
  return (
    <div className={styles.App}>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
      </Switch>
    </div>
  );
};

export default App;
