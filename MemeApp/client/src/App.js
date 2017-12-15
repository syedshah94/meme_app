import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth'
import PostList from './components/PostList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard'

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
          <div className="nav">
            <Link to='/login'>Login</Link> {this.state.auth ? <p></p> : <Link to='/register'>Register</Link>}
            <Link to='/dash'>Dash</Link>
            <Link to='/posts'>Feed</Link>
          </div>

          <Route exact path="/posts" render={() => <PostList />} />

          <Route exact path="/register" render={() => (this.state.auth) ?
            <Redirect to='/dash' />
            : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>}
          />

          <Route exact path="/login" render={() => (this.state.auth) ?
            <Redirect to='/dash' />
            : <RegisterForm handleRegisterLoginSubmit={this.handleLoginSubmit}/>}
          />

          <Route exact path='/dash' render={() => <Dashboard />} />
        </div>
      </Router>
    );
  }
}




export default App;
