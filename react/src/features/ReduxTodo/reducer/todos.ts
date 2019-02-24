import {Action, FETCH_SUCCESS, ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../actions"
import {State, Todo} from "../types";
import {Reducer} from "redux";

export const initialState = {};

const todosReducers: Reducer<State["todos"]> = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.todos.reduce(addTodo, {});
    case ADD_TODO:
      return addTodo(state, action.todo);
    case REMOVE_TODO:
      return removeTodo(state, action.id);
    case UPDATE_TODO:
      return updateTodo(state, action.todo);
    default:
      return state;
  }
};

const addTodo = (state: State["todos"], todo: Todo) => {
  return {...state, [todo.id]: todo};
};

const updateTodo = (state: State["todos"], todo: Todo) => {
  const nextState = {...state};
  nextState[todo.id] = todo;
  return nextState;
};

const removeTodo = (state: State["todos"], id: number) => {
  const nextState = {...state};
  delete nextState[id];
  return nextState;
};

export default todosReducers;
