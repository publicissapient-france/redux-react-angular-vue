import React from "react";
import {Todo as TodoType} from "../../../types";
import {Todo} from "../containers/Todo";

type TodoListProps = {
  todos: TodoType[]
};

const TodoList = ({todos}: TodoListProps) => (
  <ul>
    {todos.map((todo) => (
      <li>
        <Todo key={todo.id} id={todo.id}>{todo.text}</Todo>
      </li>
    ))}
  </ul>
);

export default TodoList;