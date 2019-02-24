import {Reducer} from 'redux';
import {State} from "../types";
import filterReducer, {initialState as filterInitialState} from "./filter";
import todosReducer, {initialState as todosInitialState} from "./todos";

const initialState = {
  filter: filterInitialState,
  todos: todosInitialState
};

const reducer: Reducer<State> = (state = initialState, action) => {
  return {
    filter: filterReducer(state.filter, action),
    todos: todosReducer(state.todos, action),
  }
};

export default reducer;