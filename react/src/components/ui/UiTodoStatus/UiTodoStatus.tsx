import './UiTodoStatus.css';

import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TodoStatus } from '../../../domains/todo.model';

export interface IUiTodoStatusProps {
  status: TodoStatus;
}

export class UiTodoStatus extends Component<IUiTodoStatusProps> {
  render() {
    return (
      this.props.status && this.props.status.totalCount ?
        <div className="status">
          <span>{ this.props.status.remainCount }</span>
          /
          <span>{ this.props.status.totalCount }</span>
          { !this.props.status.remainCount ?
            <FontAwesomeIcon icon="smile-beam" className="happy" /> : null }
        </div> : null
    );
  }
}

export default UiTodoStatus;
