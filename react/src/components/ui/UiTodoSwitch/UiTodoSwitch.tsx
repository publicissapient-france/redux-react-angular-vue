import classNames from 'classnames';
import React, { Component } from 'react';

import { TodoCategory } from '../../../domains';
import styles from './UiTodoSwitch.module.css';

export interface IUiTodoSwitchProps {
  category: TodoCategory;
  select: (category: TodoCategory) => void;
}

export class UiTodoSwitch extends Component<IUiTodoSwitchProps> {
  list: TodoCategory[] = ['all', 'active', 'completed'];

  className(item: TodoCategory) {
    return classNames(styles['button'], {
      [styles['button--active']]: this.props.category === item
    });
  }

  render() {
    return <div>{this.list.map(item =>
      <button
        key={item}
        className={this.className(item)}
        onClick={() => this.props.select(item)}>
        {item}
      </button>
    )}</div>
  }
}

export default UiTodoSwitch;
