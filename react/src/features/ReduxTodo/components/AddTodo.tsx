import React, {useState} from "react";

type AddTodoProps = {
  add: (text: string) => Promise<any>;
}

const AddTodo = ({add}: AddTodoProps) => {
    const [text, setText] = useState("");

    return (
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
        <button onClick={() => add(text).finally(() => setText(""))}>
          add
        </button>
      </div>
    )
  }
;

export default AddTodo;