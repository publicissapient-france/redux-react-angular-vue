import React, { Component, Fragment } from 'react';

import styles from './ReduxTodo.module.css';

export interface IReduxTodoState {}

export class ReduxTodo extends Component<{}, IReduxTodoState> {
  state: IReduxTodoState = {};

  render() {
    return (
      <Fragment>
        <p className={styles['center']}>ReduxTodo...</p>
      </Fragment>
    );
  }
}

export default ReduxTodo;
