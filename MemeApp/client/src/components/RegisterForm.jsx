import React, { Component } from 'react'

import { Field, Control, Input, Button, Section} from 'reactbulma'

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  }

  render() {
    return (
      <Section small className="form">
        <h1>Meme Review</h1>
        <form onSubmit = {(e) => this.props.handleRegisterSubmit(e, this.state)}>
          <input type="text" name="username" placeholder="username" value={this.state.username}
            onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password" value={this.state.password}
            onChange={this.handleChange} />
          <input type="text" name="name" placeholder="name" value={this.state.name}
            onChange={this.handleChange} />
          <input type="email" name="email" placeholder="email" value={this.state.email}
            onChange={this.handleChange} />
          <input type="submit" value="Register" />
        </form>





      </Section>
    )
  }
}

export default RegisterForm;
