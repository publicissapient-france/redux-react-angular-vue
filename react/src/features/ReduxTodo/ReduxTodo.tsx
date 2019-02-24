import React from 'react';
import {Provider} from "react-redux";
import reducer from "./reducer"

import styles from './ReduxTodo.module.css';
import {createStore} from "redux";

const store = createStore(reducer);

const ReduxTodo = () => {
  return (
    <Provider store={store}>
      <p className={styles['center']}>ReduxTodo...</p>
    </Provider>
  );
};

export default ReduxTodo;
