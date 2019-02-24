import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Todo as TodoType} from "../../../types";

type TodoProps = {
  todo: TodoType,
  remove: () => void,
  toggleDone: (todo: TodoType) => Promise<any>
}

const Todo = ({todo, remove, toggleDone}: TodoProps) => (
  <div>
    <button onClick={() => toggleDone(todo)}>
      <FontAwesomeIcon icon={todo.done ? 'toggle-off' : 'toggle-on'}/>
    </button>
    <span>{todo.text}</span>
    <button onClick={() => remove()}>
      <FontAwesomeIcon icon="trash"/>
    </button>
  </div>
);

export default Todo;