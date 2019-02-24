import classNames from 'classnames';
import React, { Component } from 'react';

import { TodoCategory } from '../../../domains';
import styles from './UiTodoCategory.module.css';

export interface IUiTodoCategoryProps {
  category: TodoCategory;
  select: (category: TodoCategory) => void;
}

export class UiTodoCategory extends Component<IUiTodoCategoryProps> {
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

export default UiTodoCategory;
