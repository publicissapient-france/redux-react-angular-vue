import './UiTodoStatus.css';

import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TodoStatus } from '../../../domains/todo.model';

export interface IUiTodoStatusProps {
  status: TodoStatus;
}

export class UiTodoStatus extends Component<IUiTodoStatusProps> {
  get status() {
    return (
      <Fragment>
        <span>{this.props.status.remainCount}</span> /
        <span>{this.props.status.totalCount}</span>
      </Fragment>
    );
  }

  get empty() {
    return this.props.status.remainCount ? null :
      <FontAwesomeIcon icon="smile-beam" className="happy" />;
  } 

  render() {
    return (
      this.props.status && this.props.status.totalCount ?
        <div className="status">
          {this.status}
          {this.empty}
        </div> : null
    );
  }
}

export default UiTodoStatus;
