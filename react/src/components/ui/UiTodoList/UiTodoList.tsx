import './UiTodoList.css';

import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Todo } from '../../../domains/todo.model';
import UiTodoTextEditable from '../UiTodoTextEditable/UiTodoTextEditable';

export interface IUiTodoListProps {
  todos: Todo[];
  toggleDone: (todo: Todo) => void;
  editText: (todo: Todo, text: string) => void;
  remove: (todo: Todo) => void;
}

export class UiTodoList extends Component<IUiTodoListProps> {
  render() {
    return (
      <Fragment>
        {this.props.todos!.length ? 
          <ul className="list">
            {this.props.todos.map(todo => (
              <li key={todo.id} className="list-item">
                <button onClick={() => this.props.toggleDone(todo)}>
                  <FontAwesomeIcon icon={todo.done ? 'toggle-off' : 'toggle-on'} />
                </button>

                <UiTodoTextEditable todo={todo} change={this.props.editText} />

                <button onClick={() => this.props.remove(todo)}>
                  <FontAwesomeIcon icon="trash" />
                </button>
              </li>
            ))}
          </ul>
         : 
          <div className="hello">
            <FontAwesomeIcon icon="clipboard-list" size="3x" />
          </div>
        }
      </Fragment>
    );
  }
}

export default UiTodoList;
