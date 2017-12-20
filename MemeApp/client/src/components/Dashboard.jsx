import React, { Component } from 'react'
import { Button, Section, Title, SubTitle} from 'reactbulma'


import Auth from '../modules/Auth'
import AddPostForm from './AddPostForm'
import EditPostForm from './EditPostForm'


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      myPosts: 0,
      postsLoaded: false,
      current_user: null,
      showComponent: false,
      show: false
    }
    this.getUserPosts = this.getUserPosts.bind(this);
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    this.getUserPosts();
  }

  getUserPosts() {
    fetch('/profile', {
      method: 'GET',
      headers:{
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          current_user: res.user.username,
          myPosts: res.posts,
          postsLoaded: true,
        })
      }).catch(err => console.log(err));
  }

  addPost(e, data) {
    e.preventDefault();
    if(data.title) {
    fetch('/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      },
      body: JSON.stringify({
        post: data,
      }),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.getUserPosts();
      }).catch(err => console.log(err));
    }

  }

  editPost(e, data, id) {
    e.preventDefault();
    fetch(`/posts/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      },
      body: JSON.stringify({
        post: data,
      }),
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.getUserPosts();
      }).catch(err => console.log(err));
  }

    deletePost(id) {
    fetch(`/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      },
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.getUserPosts();
      }).catch(err => console.log(err));
  }

  handleShow(e) {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <Section className="dash">
        <AddPostForm addPost={this.addPost} />

        <Section>
          <Title is='2' >Hello {this.state.current_user}</Title>
          {(this.state.myPosts.length === 1) ?
            <SubTitle is='3'>Congrats on your first post!</SubTitle> :
            <SubTitle is='3'>You have {this.state.myPosts.length} posts!</SubTitle>
          }
          <SubTitle is='3'>Can We Make That {this.state.myPosts.length + 1}?</SubTitle>
        </Section>
        <hr />

        {/*Display user's posts*/}
        {this.state.myPosts ?
          this.state.myPosts.map(post => {
            return (
              <Section key={post.id}>
                <Title is='3' spaced><b>{post.title}</b></Title>
                <img src={post.url} alt='' />
                <SubTitle is='4' spaced>{post.description}</SubTitle>

                {this.state.show ? null : <Button info onClick={() => this.handleShow()}>Edit Mode</Button>}
                {this.state.show ? <EditPostForm post={post} editPost={this.editPost} handleShow={this.handleShow} show={this.state.show} /> : null}

                <Button danger onClick={() => this.deletePost(post.id)}>Delete</Button>
              </Section>
            )
          })
          : <p>Loading...</p>
        }
      </Section>
    )
  }
}

export default Dashboard
