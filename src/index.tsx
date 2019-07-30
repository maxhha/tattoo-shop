import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Store from "apis/Store";

const store = new Store(
    process.env.REACT_APP_UNSPLASH_APP_ACCESS_KEY,
    process.env.REACT_APP_UNSPLASH_APP_SECRET);

// Update database here, before hot(App) so it would be called ones
// after first page load 
store.updateDatabase();

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
