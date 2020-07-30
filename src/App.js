import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Blog />
      </div>
    );
  }
}

export default App;
