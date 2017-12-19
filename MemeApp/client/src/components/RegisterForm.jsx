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

        <label className="label">Name</label>
        <Field groupedCentered>
          <Control>
            <Input name="name" type="text" value={this.state.name} placeholder="Text input" onChange={this.handleChange}/>
          </Control>
        </Field>

        <label className="label">Email</label>
        <Field groupedCentered>
          <Control>
            <Input name="email" type="email" value={this.state.email} placeholder="Email Input" onChange={this.handleChange}/>
          </Control>
        </Field>

        <Field groupedCentered onClick={(e) => this.props.handleRegisterSubmit(e, this.state)}>
          <Control>
            <Button medium info type="submit" value="Login">Register</Button>
          </Control>
        </Field>
      </Section>
    )
  }
}

export default RegisterForm;
