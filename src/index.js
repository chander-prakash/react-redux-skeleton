import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
});
