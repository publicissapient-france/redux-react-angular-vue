import React from "react";

type TodoProps = {
  text: string,
  done: boolean,
  remove: () => void
}

const Todo = ({text, done, remove}: TodoProps) => (
  <div>
    <span data-done={done}/>
    <span>{text}</span>
    <button onClick={() => remove()}/>
  </div>
);

export default Todo;