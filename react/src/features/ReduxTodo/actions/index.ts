import {Todo, FilterStatus} from "../types";
import {Dispatch} from "redux";

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
    fetch('/some/url')
      .then((res) => res.json())
      .then((todos: Todo[]) => dispatch(fetchSuccess(todos)));
  }
}


export const ADD_TODO = "ADD_TODO";

function addTodo(todo: Todo) {
  return {
    type: ADD_TODO as typeof ADD_TODO,
    todo
  }
}

export function createTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    fetch("/create/todo")
      .then((res) => res.json())
      .then(() => dispatch(addTodo(todo)));
  }
}

export const UPDATE_TODO = "UPDATE_TODO";

function updateTodo(todo: Todo) {
  return {
    type: UPDATE_TODO as typeof UPDATE_TODO,
    todo
  }
}

export function patchTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    fetch("/patch/todo")
      .then((res) => res.json())
      .then(() => dispatch(updateTodo(todo)));
  }
}

export const REMOVE_TODO = "REMOVE_TODO";

function removeTodo(id: number) {
  return {
    type: REMOVE_TODO as typeof REMOVE_TODO,
    id
  }
}

export function deleteTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    fetch("/delete/todo")
      .then((res) => res.json())
      .then(() => dispatch(removeTodo(todo.id)))
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