import {FilterStatus, State} from "../../../types";

export const getRemainingCount = (state: State) => Object.values(state.todos).filter((todo) => !todo.done).length;

export const getTotal = (state: State) => Object.values(state.todos).length;

export const getList = (state: State) => {
  return Object.values(state.todos)
    .filter((todo) => {
      return (
        state.filter === FilterStatus.ALL ||
        state.filter === FilterStatus.COMPLETED && todo.done ||
        state.filter === FilterStatus.ACTIVE && !todo.done
      )
    }).sort((todo1, todo2) => todo1.id - todo2.id);
};