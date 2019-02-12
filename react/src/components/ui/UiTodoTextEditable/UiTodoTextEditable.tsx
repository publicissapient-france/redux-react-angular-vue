import styles from './UiTodoTextEditable.module.css';

import classNames from 'classnames';
import React, { Component, createRef } from 'react';

import { Todo } from '../../../domains/todo.model';

export interface IUiTodoTextEditableProps {
  todo: Todo;
  change: (todo: Todo, text: string) => void;
}

export interface IUiTodoTextEditableState {
  edit: boolean;
  textContent: string;
}

export class UiTodoTextEditable extends Component<IUiTodoTextEditableProps, IUiTodoTextEditableState> {
  state: IUiTodoTextEditableState = {
    edit: false,
    textContent: '',
  };

  ref = createRef<HTMLSpanElement>();

  get domTextContent() {
    if (this.ref && this.ref.current) {
      return (this.ref.current.textContent || '').trim();
    } else {
      return '';
    }
  }

  get className() {
    return classNames(styles['text'], {
      [styles['text--done']]: this.props.todo.done,
      [styles['text--edit']]: this.state.edit,
    });
  }

  startEdit = () => {
    if (!this.props.todo.done) {
      this.setState({ edit: true, textContent: this.domTextContent });
    }
  }

  stopEdit = () => {
    if (this.domTextContent !== this.state.textContent) {
      this.props.change(this.props.todo, this.domTextContent);
    }
    this.setState({ edit: false, textContent: '' });
  }

  keyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (this.state.edit && this.ref.current) {
        this.ref.current.blur();
      }
    }
    if (event.key === 'Escape') {
      if (this.state.edit && this.ref.current) {
        this.ref.current.textContent = this.state.textContent;
        this.ref.current.blur();
      }
    }
  }

  componentDidMount() {
    if (this.ref.current) {
      this.ref.current.textContent = this.props.todo.text;
    }
  }

  componentDidUpdate() {
    if (this.state.edit && this.ref.current) {
      this.ref.current.focus(); // FIXME: called multiple times...
    }
  }

  render() {
    return (
      <span
        ref={this.ref}
        className={this.className}
        contentEditable={this.state.edit}
        onClick={this.startEdit}
        onBlur={this.stopEdit}
        onKeyDown={this.keyDown}>
      </span>
    );
  }
}

export default UiTodoTextEditable;
