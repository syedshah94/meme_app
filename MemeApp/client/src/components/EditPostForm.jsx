import React, { Component } from 'react'

class EditPostForm extends Component {
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
      <div className="form">
        <form onSubmit={(e) => this.props.editPost(e, this.state, this.props.post_id)} >
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
          <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
          <input type="submit" value="Edit Post" />
        </form>
      </div>
    )
  }
}

export default EditPostForm;
