import React, {useEffect} from "react";
import {AddTodo, RemainingCount, TodoList} from "../../containers/Todo";
import {FilterSelector} from "../../containers/Filter";
import styles from "./App.module.css";

type AppProps = {
  fetchTodos: () => Promise<any>
}

const App = ({fetchTodos}: AppProps) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div className={styles['top']}>
        <AddTodo/>
      </div>
      <TodoList/>
      <div className={styles['bottom']}>
        <RemainingCount/>
        <FilterSelector/>
      </div>
    </div>
  );
};

export default App;