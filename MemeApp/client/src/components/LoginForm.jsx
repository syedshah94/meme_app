import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import { Field, Control, Input, Button, Section} from 'reactbulma'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
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

  handleClick() {
    this.setState({
      show: true,
    });
  }

  render() {
    return (
    <Section medium className="form">
      <ToggleDisplay show={this.state.show}>You Have Displeased Me With Your Incorrent User/Password Combination :( </ToggleDisplay>
      <label className="label">Username</label>
      <Field groupedCentered>
        <Control>
          <Input name="username" type="text" value={this.state.username} placeholder="Text input" onChange={this.handleChange}/>
        </Control>
      </Field>

      <label className="label">Password</label>
      <Field groupedCentered>
        <Control>
          <Input name="password" type="password" value={this.state.password} placeholder="Password input" onChange={this.handleChange}/>
        </Control>
      </Field>

      <Field groupedCentered onClick={(e) => this.props.handleLoginSubmit(e, this.state)}>
        <Control>
          <Button medium success type="submit" value="Login" onClick={(e) => this.handleClick()}>Submit</Button>
        </Control>
      </Field>
    </Section>
    )
  }
}

export default LoginForm;
