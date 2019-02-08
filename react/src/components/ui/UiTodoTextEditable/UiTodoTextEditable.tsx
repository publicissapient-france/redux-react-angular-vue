import './UiTodoTextEditable.css';

import classNames from 'classnames';
import React, { Component, Fragment } from 'react';

import { Todo } from '../../../domains/todo.model';

export interface ITodoTextEditableProps {
  todo: Todo;
  change: (todo: Todo, text: string) => void;
}

export interface ITodoTextEditableState {
  edit: boolean;
  textContent: string;
}

export class UiTodoTextEditable extends Component<ITodoTextEditableProps, ITodoTextEditableState> {
  state = {
    edit: false,
    textContent: '',
  };

  ref = React.createRef<HTMLSpanElement>();

  get domTextContent() {
    if (this.ref && this.ref.current) {
      return (this.ref.current.textContent || '').trim();
    } else {
      return '';
    }
  }

  get className() {
    return classNames('text', {
      'text--done': this.props.todo.done,
      'text--edit': this.state.edit,
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

  KeyDown = (event: any) => {
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
        onKeyDown={this.KeyDown}>
        { this.props.todo.text }
      </span>
    );
  }
}

export default UiTodoTextEditable;
