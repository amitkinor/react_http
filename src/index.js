import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(
  (config) => {
    // console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
