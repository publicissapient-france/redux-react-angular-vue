import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Todo as TodoType} from "../../../../types";
import styles from "./Todo.module.css";
import classNames from 'classnames';

type TodoProps = {
  done: boolean,
  text: string,
  id: number,
  remove: () => void,
  toggleDone: (todo: TodoType) => Promise<any>
}

const Todo = ({done, text, id, remove, toggleDone}: TodoProps) => (
  <>
    <button onClick={() => toggleDone({done, text, id})}>
      <FontAwesomeIcon icon={done ? 'toggle-off' : 'toggle-on'}/>
    </button>
    <span className={classNames(styles['text'], done && styles['text--done'])}>{text}</span>
    <button onClick={() => remove()}>
      <FontAwesomeIcon icon="trash"/>
    </button>
  </>
);

export default Todo;