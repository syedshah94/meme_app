import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth'
import PostList from './components/PostList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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
      console.log(res)
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

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => {
      // console.log(res);
      if (res.token) {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        });
      }
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/posts" render={() => <PostList />} />
{/*          <Route exact path="/register" render={() => this.state.auth ?
            <Dashboard /> : <RegisterForm />
          } />*/}
          <Route exact path="/register" render={() => <RegisterForm
            handleRegisterSubmit={this.handleRegisterSubmit}/>}
          />
          <Route exact path="/login" render={() => <LoginForm
            handleLoginSubmit={this.handleLoginSubmit}/> }
          />
        </div>
      </Router>
    );
  }
}

export default App;
