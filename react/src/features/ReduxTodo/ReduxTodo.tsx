import React from 'react';
import {Provider} from "react-redux";
import reducer from "./reducer";
import thunk, {ThunkMiddleware} from "redux-thunk";

import styles from './ReduxTodo.module.css';
import {createStore, applyMiddleware} from "redux";
import {Action} from "./actions";
import {State} from "../../types";

const store = createStore(reducer, applyMiddleware(thunk as ThunkMiddleware<State, Action>));

const ReduxTodo = () => {
  return (
    <Provider store={store}>
      <p className={styles['center']}>ReduxTodo...</p>
    </Provider>
  );
};

export default ReduxTodo;
