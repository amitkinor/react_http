
import React, { Component } from 'react';
import axios from 'axios';

import classes from './NewPost.module.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
  };


  postDataHandler = () => {
    const { title, content, author } = this.state;
    const data = {
      title,
      content,
      author,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    const { title, content, author } = this.state;
    return (
      <div className={classes.NewPost}>
        <h1>Add a Post</h1>
        <label>{title}</label>
        <input
          type="text"
          value={title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button type="button" onClick={this.postDataHandler}>
            Add Post
        </button>
      </div>
    );
  }
}

export default NewPost;
