import React, { Component } from 'react'
import { Field, Control, Input, Textarea, Button, Section} from 'reactbulma'

class EditPostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      url: this.props.post.url,
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
      <div className="form">
        <Field>
          <Control>
            <Input primary name="title" type="text" value={this.state.title} placeholder="Title" onChange={this.handleChange}/>
          </Control>
        </Field>

        <Field>
          <Control>
            <Textarea info name="description" type="text" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
          </Control>
        </Field>

        <Field>
          <Control>
            <Textarea info name="url" type="text" value={this.state.url} placeholder="URL" onChange={this.handleChange}/>
          </Control>
        </Field>

        <Field groupedCentered onClick={(e) => this.props.editPost(e, this.state, this.props.post.id)} >
          <Control>
            <Button primary type="submit" value="Change Post">Change Post</Button>
          </Control>
        </Field>
      </div>
    )
  }
}

export default EditPostForm;
