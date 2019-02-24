import {Todo, FilterStatus} from "../../../types";
import {Dispatch} from "redux";
import * as API from "../../../shared/RestService";

export const START_FETCH = "START_FETCH";

function startFetch() {
  return {
    type: START_FETCH as typeof START_FETCH
  }
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

function fetchSuccess(todos: Todo[]) {
  return {
    type: FETCH_SUCCESS as typeof FETCH_SUCCESS,
    todos
  }
}

export function fetchTodos() {
  return (dispatch: Dispatch) => {
      dispatch(startFetch());
    return API.getTodos()
      .then(({data}) => dispatch(fetchSuccess(data)));
  }
}


export const ADD_TODO = "ADD_TODO";

function addTodo(todo: Todo) {
  return {
    type: ADD_TODO as typeof ADD_TODO,
    todo
  }
}

export function createTodo(text: string) {
  return (dispatch: Dispatch) => {
    return API.addTodo({text})
      .then(({data}) => dispatch(addTodo(data)));
  }
}

export const UPDATE_TODO = "UPDATE_TODO";

function updateTodo(todo: Todo) {
  return {
    type: UPDATE_TODO as typeof UPDATE_TODO,
    todo
  }
}

export function toggleTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    return API.updateTodo(todo)
      .then(() => dispatch(updateTodo({...todo, done: !todo.done}))); // TODO : handle todo not found
  }
}

export const REMOVE_TODO = "REMOVE_TODO";

function removeTodo(id: number) {
  return {
    type: REMOVE_TODO as typeof REMOVE_TODO,
    id
  }
}

export function deleteTodo(id: number) {
  return (dispatch: Dispatch) => {
    return API.removeTodo(id)
      .then(() => dispatch(removeTodo(id)))
  }
}

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export function setVisibilityFilter(filter: FilterStatus) {
  return {
    type: SET_VISIBILITY_FILTER as typeof SET_VISIBILITY_FILTER,
    filter
  }
}

export type Action =
  ReturnType<typeof startFetch> |
  ReturnType<typeof fetchSuccess> |
  ReturnType<typeof addTodo> |
  ReturnType<typeof updateTodo> |
  ReturnType<typeof removeTodo> |
  ReturnType<typeof setVisibilityFilter>