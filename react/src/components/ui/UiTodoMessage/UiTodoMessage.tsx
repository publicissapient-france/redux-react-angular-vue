import './UiTodoMessage.css';

import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TodoCategory } from '../../../domains/todo.model';

export interface IUiTodoMessageProps {
  hiddenCategory: TodoCategory | void;
}

export class UiTodoMessage extends Component<IUiTodoMessageProps> {
  render() {
    return (
      <p className="message">
        {this.props.hiddenCategory ?
          <Fragment>
            <FontAwesomeIcon icon="exclamation-triangle" />
            This task appears in the
            "<span className="category">{this.props.hiddenCategory}</span>"
            tab!
          </Fragment>  : null}
        &nbsp;
      </p>
    );
  }
}

export default UiTodoMessage;
