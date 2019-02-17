import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TodoCategory } from '../../../domains';
import styles from './UiTodoMessage.module.css';

export interface IUiTodoMessageProps {
  hiddenCategory: TodoCategory | void;
}

export class UiTodoMessage extends Component<IUiTodoMessageProps> {
  render() {
    return (
      <p className={styles['message']}>
        {this.props.hiddenCategory ?
          <Fragment>
            <FontAwesomeIcon icon="exclamation-triangle" /> This task appears in the
            "<span className={styles['category']}>{this.props.hiddenCategory}</span>" tab!
          </Fragment>  : null}
        &nbsp;
      </p>
    );
  }
}

export default UiTodoMessage;
