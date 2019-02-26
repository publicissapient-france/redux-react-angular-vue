import React from "react";
import {Todo as TodoType} from "../../../../types";
import {Todo} from "../../containers/Todo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./TodoList.module.css";

type TodoListProps = {
  todos: TodoType[]
};

const TodoList = ({todos}: TodoListProps) => {
  return todos.length ?
    (
      <ul className={styles['list']}>
        {todos.map((todo) => (
          <li className={styles['list-item']} key={todo.id}>
            <Todo id={todo.id}>{todo.text}</Todo>
          </li>
        ))}
      </ul>
    ) :
    (
      <div className={styles['empty']}>
        <FontAwesomeIcon icon="clipboard-list" size="3x"/>
      </div>
    );
}

export default TodoList;