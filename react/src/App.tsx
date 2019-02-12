import './shared/fontAwesome';

import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import styles from './App.module.css';
import Nav from './components/Nav/Nav';
import ReduxTodo from './features/ReduxTodo/ReduxTodo';
import VanillaTodo from './features/VanillaTodo/VanillaTodo';

class App extends Component {
  title = 'Tout doux!';

  render() {
    return (
      <Router>
        <div className={styles['container']}>
          <h1 className={styles['title']}>{this.title}</h1>

          <div className={styles['navbar']}>
            <Nav></Nav>
          </div>

          <Switch>
            <Redirect exact from="/" to="/vanilla" />
            <Route path="/redux" component={ReduxTodo} />
            <Route path="/vanilla" component={VanillaTodo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
