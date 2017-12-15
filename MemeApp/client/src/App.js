import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth'
import PostList from './components/PostList';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        user: data,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/posts" render={() => <PostList />} />

          <Route exact path="/register" render={() => <RegisterForm
            handleRegisterSubmit={this.handleRegisterSubmit}
          />} />
        </div>
      </Router>
    );
  }
}

export default App;
