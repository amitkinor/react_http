import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
      presentedPost: null,
    };
  
  componentDidUpdate() {
    if (this.props.id) {
      if (!this.state.presentedPost ||
        (this.state.presentedPost &&
        this.state.presentedPost.id !== this.props.id)
      ) {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
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
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      let post = <p style={{ textAlign: 'center' }}>Loading!</p>;
    }
    if (this.state.presentedPost) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.presentedPost.title}</h1>
          <p>Content</p>
          <div className={classes.Edit}>
            <button type="button" className={classes.Delete}>
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
};

export default FullPost;
