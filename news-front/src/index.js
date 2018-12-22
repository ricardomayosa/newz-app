import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput.css';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput-typeahead.css';
import 'bootstrap-tagsinput/dist/bootstrap-tagsinput.js';

const WithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<WithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
