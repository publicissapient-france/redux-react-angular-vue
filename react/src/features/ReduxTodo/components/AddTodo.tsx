import React, {useState} from "react";

const AddTodo = (add: (text: string) => Promise<boolean>) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)}>{text}</input>
      <button onClick={() => add(text).then(() => setText(""))}>
      </button>
    </div>
  )
};

export default AddTodo;