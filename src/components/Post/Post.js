import React from 'react';
import PropTypes from 'prop-types';

import classes from './Post.module.css';

const Post = ({ title }) => (
  <article className={classes.Post}>
    <h1>{title}</h1>
    <div className={classes.Info}>
      <div className={classes.Author}>Author</div>
    </div>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
