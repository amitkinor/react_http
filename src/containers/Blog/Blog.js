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
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    const { posts } = this.state;

    //  turns the posts arr to a components array
    const postsCompnentsArr = posts.map((post) => {
      return <Post key={post.id} title={post.title} />;
    });

    return (
      <div>
        <section className={classes.Posts}>{postsCompnentsArr}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
