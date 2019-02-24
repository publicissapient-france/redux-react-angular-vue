import React from "react";
import {Todo} from "../../../types";

const Todo = (todo: Todo, remove: () => void) => (
  <div>
    <span data-done={todo.done}/>
    <span>{todo.text}</span>
    <button onClick={() => remove()}/>
  </div>
);

export default Todo;