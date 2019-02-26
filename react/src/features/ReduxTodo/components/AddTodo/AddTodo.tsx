import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./AddTodo.module.css";


type AddTodoProps = {
  add: (text: string) => Promise<any>;
}

const AddTodo = ({add}: AddTodoProps) => {
    const [text, setText] = useState("");

    return (
      <div>
        <input
          className={styles['text']}
          type="text" onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          className={styles['add']}
          onClick={() => add(text).finally(() => setText(""))}
        >
          <FontAwesomeIcon icon="plus"/>
        </button>
      </div>
    )
  }
;

export default AddTodo;