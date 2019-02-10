import './UiTodoSwitch.css';

import classNames from 'classnames';
import React, { Component } from 'react';

import { TodoCategory } from '../../../domains/todo.model';

export interface IUiTodoSwitchProps {
  category: TodoCategory;
  select: (category: TodoCategory) => void;
}

export class UiTodoSwitch extends Component<IUiTodoSwitchProps> {
  list: TodoCategory[] = ['all', 'active', 'completed'];

  className(item: TodoCategory) {
    return classNames('button', { 'button--active': this.props.category === item });
  }

  render() {
    return <div>{this.list.map(item =>
      <button
        className={this.className(item)}
        onClick={() => this.props.select(item)}>
        {item}
      </button>
    )}</div>
  }
}

export default UiTodoSwitch;
