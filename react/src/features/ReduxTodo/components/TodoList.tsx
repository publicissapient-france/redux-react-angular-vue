import React from "react";
import {Todo} from "../../../types";

const TodoList = (todos: Todo[]) => (
  <ul>
    {todos.map((todo) => (
      <li>
        <div key={todo.id}>{todo.text}</div>
      </li>
    ))}
  </ul>
);