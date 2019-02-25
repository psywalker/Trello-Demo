import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Main from './router';
import BoardsObj from './reducers'
import initialStore from './initialStore'

let store = createStore(BoardsObj, initialStore)

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);