import React from 'react';
import PropTypes from 'prop-types';

import classes from './Post.module.css';

const Post = ({ title, author, clicked }) => (
  <article className={classes.Post} onClick={clicked}>
    <h1>{title}</h1>
    <div className={classes.Info}>
      <div className={classes.Author}>{author}</div>
    </div>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Post;
