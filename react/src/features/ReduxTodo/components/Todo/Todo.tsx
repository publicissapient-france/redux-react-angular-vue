import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Todo as TodoType} from "../../../../types";
import styles from "./Todo.module.css";
import classNames from 'classnames';

type TodoProps = {
  todo: TodoType,
  remove: () => void,
  toggleDone: (todo: TodoType) => Promise<any>
}

const Todo = ({todo, remove, toggleDone}: TodoProps) => (
  <>
    <button onClick={() => toggleDone(todo)}>
      <FontAwesomeIcon icon={todo.done ? 'toggle-off' : 'toggle-on'}/>
    </button>
    <span className={classNames(styles['text'], todo.done && styles['text--done'])}>{todo.text}</span>
    <button onClick={() => remove()}>
      <FontAwesomeIcon icon="trash"/>
    </button>
  </>
);

export default Todo;