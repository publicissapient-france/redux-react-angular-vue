import React, { Component, Fragment } from 'react';

import './ReduxTodo.css';

export interface IReduxTodoState {}

export class ReduxTodo extends Component<{}, IReduxTodoState> {
  state: IReduxTodoState = {};

  render() {
    return <Fragment>
      <p style={{textAlign:'center'}}>ReduxTodo</p>
    </Fragment>
  }
}

export default ReduxTodo;
