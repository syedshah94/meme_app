import React, { Component } from 'react'
import { Field, Control, Input, Textarea, Button, Section} from 'reactbulma'

class AddPostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
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
      <Section className="form">
      <div className="form">
        <form onSubmit={(e) => this.props.addPost(e,this.state)} >
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
          <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
          <input type="text" name="url" placeholder="Image Url" value={this.state.url} onChange={this.handleChange} />
          <input type="submit" value="Create Post" />
        </form>
      </div>


        <Field>
          <Control>
            <Input primary name="title" type="text" value={this.state.title} placeholder="Title" onChange={this.handleChange}/>
          </Control>
        </Field>

        <Field>
          <Control>
            <Input warning name="url" type="text" value={this.state.url} placeholder="Image URL" onChange={this.handleChange}/>
          </Control>
        </Field>

        <Field>
          <Control>
            <Textarea info name="description" type="text" value={this.state.description} placeholder="Description" onChange={this.handleChange}/>
          </Control>
        </Field>

        <Field groupedCentered onClick={(e) => this.props.addPost(e,this.state)} >
          <Control>
            {/*<Button primary type="submit" value="Create Post">Create Post</Button>*/}
            <Input primary groupedCentered type="submit" value="Create Post" />
          </Control>
        </Field>
      </Section>
    )
  }
}

export default AddPostForm;
