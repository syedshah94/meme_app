import React, { Component } from 'react'

import Auth from '../modules/Auth'
import AddPostForm from './AddPostForm'



class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      myPosts: 0,
      postsLoaded: false,
      current_user: null,
    }
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

  editPost(e, data, id) {
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

  render() {
    return (
      <div className="dash">
        <AddPostForm addPost={this.addPost} />

        <h1>Hello {this.state.current_user}</h1>
        <h1>You have {this.state.myPosts.length} posts!</h1>

        {/*Display user's posts*/}
        {this.state.myPosts ?
          this.state.myPosts.map(post => {
            return (
              <div key={post.id}>
                <h1><b>{post.title}</b></h1>
                <img src={post.url} alt='' />
                <h3>{post.description}</h3>

                <input type="submit" value="Edit" onClick={(e) => (console.log('button working'))} />
                <input type="submit" value="Delete" />
              </div>
            )
          })
          : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default Dashboard
