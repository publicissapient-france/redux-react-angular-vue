import React from "react";
import {AddTodo, RemainingCount, TodoList} from "../containers/Todo";
import {FilterSelector} from "../containers/Filter";

const App = () => (
  <div>
    <AddTodo/>
    <TodoList />
    <RemainingCount/>
    <FilterSelector/>
  </div>
);