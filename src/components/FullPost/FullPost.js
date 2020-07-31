import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    presentedPost: null,
  };

  componentDidUpdate() {
    const { id } = this.props;
    const { presentedPost } = this.state;
    if (id) {
      if (!presentedPost || (presentedPost && presentedPost.id !== id)) {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            this.setState({ presentedPost: response.data });
          })
          .catch((err) => {
            throw new Error(err);
          });
      }
    }
  }

  render() {
    const { id, removePost } = this.props;
    const { presentedPost } = this.state;

    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (id) {
      post = <p style={{ textAlign: 'center' }}>Loading!</p>;
    }
    if (presentedPost) {
      post = (
        <div className={classes.FullPost}>
          <h1>{presentedPost.title}</h1>
          <p>{presentedPost.body}</p>
          <div className={classes.Edit}>
            <button
              type="button"
              className={classes.Delete}
              onClick={removePost}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}
FullPost.propType = {
  id: PropTypes.object,
  removePost: PropTypes.func.isRequired,
  presentedPost: PropTypes.object.isRequired,
};

export default FullPost;
