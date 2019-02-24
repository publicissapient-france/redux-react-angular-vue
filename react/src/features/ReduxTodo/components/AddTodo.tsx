import React, {useState} from "react";

type AddTodoProps = {
  add: (text: string) => Promise<any>;
}

const AddTodo = ({add}: AddTodoProps) => {
    const [text, setText] = useState("");

    return (
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)}>{text}</input>
        <button onClick={() => add(text).finally(() => setText(""))}>
        </button>
      </div>
    )
  }
;

export default AddTodo;