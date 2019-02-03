import './Vanilla-todo.css';

import React, { Component, Fragment } from 'react';

import UiTodoList from '../../components/ui/Ui-todo-list/Ui-todo-list';

export interface IVanillaTodoProps { }

const TODOS_MOCK = [
  { "id": 4, "text": "a", "done": true },
  { "id": 3, "text": "b", "done": false },
  { "id": 2, "text": "c", "done": true },
  { "id": 1, "text": "d", "done": false }
];

export class VanillaTodo extends Component<IVanillaTodoProps> {
  state: IVanillaTodoProps = {};

  render() {
    return (
      <Fragment>
        <UiTodoList
          toggleDone={() => undefined}
          remove={() => undefined}
          editText={() => undefined}
          todos={TODOS_MOCK}>
        </UiTodoList>
      </Fragment>
    )
  }
}

export default VanillaTodo;
