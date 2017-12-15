import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: null,
      postListLoaded: false
    }
  }

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          postList: res.posts,
          postListLoaded: true
        })
      }).catch(err => console.log(err));
  }

  renderPosts() {
    return this.state.postList.map(post => {
      return (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          {
            post.url ?
            <img src={`${post.url}`} alt="" width={500} height={400} mode='fit' />
            : <p>No Image</p>
          }
        </div>
      )
    })
  }

  render() {
    return (
      <div className="post-list">
        {this.state.postListLoaded ?
          this.renderPosts() : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default PostList;
