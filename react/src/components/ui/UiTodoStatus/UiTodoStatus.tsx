import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TodoStatus } from '../../../domains';
import styles from './UiTodoStatus.module.css';

export interface IUiTodoStatusProps {
  status: TodoStatus;
}

export class UiTodoStatus extends Component<IUiTodoStatusProps> {
  get hasTotal() {
    return !!this.props.status!.totalCount;
  }

  get hasRemain() {
    return !!this.props.status!.remainCount;
  }

  get status() {
    return (
      <Fragment>
        <span>
          {this.props.status.remainCount}
        </span> / <span>
          {this.props.status.totalCount}
        </span>
      </Fragment>
    );
  }

  get empty() {
    return (
      <FontAwesomeIcon icon="smile-beam" className={styles['happy']} />
    );
  }

  render() {
    return (
      <div className={styles['status']}>
        {this.hasTotal ? this.status : null}
        {this.hasTotal && !this.hasRemain ? this.empty : null}
      </div>
    );
  }
}

export default UiTodoStatus;
