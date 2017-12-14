import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth'
import PostList from './components/PostList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/posts" render={() => <PostList />} />
        </div>
      </Router>
    );
  }
}

export default App;
