import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Header';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/:movieId" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;