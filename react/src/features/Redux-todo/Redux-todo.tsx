import React, { Component, Fragment } from 'react';

import './Redux-todo.css';

export interface IReduxTodoProps {}

export class ReduxTodo extends Component<IReduxTodoProps> {
  state: IReduxTodoProps = {};

  render() {
    return <Fragment>
      <p style={{textAlign:'center'}}>ReduxTodo</p>
    </Fragment>
  }
}

export default ReduxTodo;
