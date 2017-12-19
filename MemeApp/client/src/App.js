import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth'
import PostList from './components/PostList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

// Bulma.io
import { Button, Section } from 'reactbulma'

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err));
  }

  // Navbar


  render() {
    return (
      <Router>
        <Section medium className="App">
          <div className="nav">
            {this.state.auth ? <Link to='/dash'><Button large outlined warning>Dash</Button></Link> : null}
            <Link to='/posts'><Button large outlined primary>Feed</Button></Link>
            {this.state.auth ?
              <Link to='/' onClick={this.handleLogout}><Button large outlined danger>Logout</Button></Link> :
              <Link to='/login'><Button large outlined success>Login</Button></Link>
            }
            {this.state.auth ? <span></span> : <Link to='/register'><Button large outlined info>Register</Button></Link>}
          </div>

          <Route exact path="/posts" render={() => <PostList />} />

          <Route exact path="/register" render={() => (this.state.auth) ?
            <Redirect to='/dash' />
            : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>}
          />

          <Route exact path="/login" render={() => (this.state.auth) ?
            <Redirect to='/dash' />
            : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>}
          />

          <Route exact path='/dash' render={() => <Dashboard />} />

        </Section>
      </Router>
    );
  }
}




export default App;
