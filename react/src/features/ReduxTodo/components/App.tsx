import React, {useEffect} from "react";
import {AddTodo, RemainingCount, TodoList} from "../containers/Todo";
import {FilterSelector} from "../containers/Filter";

type AppProps = {
  fetchTodos: () => Promise<any>
}

const App = ({fetchTodos}: AppProps) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <AddTodo/>
      <TodoList/>
      <RemainingCount/>
      <FilterSelector/>
    </div>
  );
};

export default App;