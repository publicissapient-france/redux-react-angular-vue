import React, { ChangeEvent, Component, KeyboardEvent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './UiTodoAdd.module.css';

export interface IUiTodoAddProps {
  text: string;
  textChange: (text: string) => void;
  add: (text: string) => void;
}

export class UiTodoAdd extends Component<IUiTodoAddProps> {
  emitText = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.textChange(event.target.value);
  };

  emitAdd = () => {
    this.props.add(this.props.text);
  };

  keyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.emitAdd();
    }
  }

  render() {
    return (
      <div>
        <input
          className={styles['text']}
          placeholder="What needs to be done?"
          type="text"
          value={this.props.text}
          onChange={this.emitText}
          onKeyDown={this.keyDown} />

        <button
          className={styles['add']}
          onClick={this.emitAdd}>
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
    );
  }
}

export default UiTodoAdd;
