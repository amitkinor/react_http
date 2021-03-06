/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
    };
  }

  componentDidMount() {
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: 'Amit',
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  postClickedHandler = (postId) => {
    this.setState({ selectedPostId: postId });
  };

  removePostHandler = (selectedPostId) => {
    axios
      .delete(`/posts/${selectedPostId}`)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(`post ${selectedPostId} was deleted. response: ${res}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
    // console.log(`removing post with id: ${selectedPostId}`);
  };

  /*
  //  turns the posts arr to a components array
  */
  changeToPostsComp(posts) {
    return posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postClickedHandler(post.id)}
        />
      );
    });
  }

  render() {
    const { posts, selectedPostId } = this.state;
    const postsAsComponents = this.changeToPostsComp(posts);

    return (
      <div>
        <section className={classes.Posts}>{postsAsComponents}</section>
        <section>
          <FullPost
            id={selectedPostId}
            removePost={() => this.removePostHandler(selectedPostId)}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
