import classNames from 'classnames';
import React, { ChangeEvent, Component, KeyboardEvent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './UiTodoAdd.module.css';

export interface IUiTodoAddProps {
  filterEnabled: boolean;
  filterEnabledChange: (filterEnabled: boolean) => void;
  text: string;
  textChange: (text: string) => void;
  addDisabled: boolean;
  add: (text: string) => void;
}

export class UiTodoAdd extends Component<IUiTodoAddProps> {
  emitFilterEnabled = () => {
    this.props.filterEnabledChange(!this.props.filterEnabled);
  };

  emitText = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.textChange(event.target.value);
  };

  emitAdd = () => {
    if (!this.props.addDisabled) {
      this.props.add(this.props.text);
    }
  };

  keyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.emitAdd();
    }
  }

  get filterClassName() {
    return classNames(styles['filter'], {
      [styles['filter--disabled']]: !this.props.filterEnabled
    });
  }

  render() {
    return (
      <div>
        <button
          className={this.filterClassName}
          onClick={this.emitFilterEnabled}>
          <FontAwesomeIcon icon="filter" />
        </button>

        <input
          className={styles['text']}
          placeholder="What needs to be done?"
          type="text"
          value={this.props.text}
          onChange={this.emitText}
          onKeyDown={this.keyDown} />

        <button
          className={styles['add']}
          disabled={this.props.addDisabled}
          onClick={this.emitAdd}>
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    );
  }
}

export default UiTodoAdd;
