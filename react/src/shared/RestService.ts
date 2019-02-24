import axios from 'axios';

import {Todo} from '../types';

const restBaseUrl = 'http://127.0.0.1:3100/';

export function getUrl(url: string) {
  return restBaseUrl + url;
}

export function getTodos() {
  return axios.get<Todo[]>(getUrl('todos'));
}

export function addTodo(todo: Partial<Todo>) {
  return axios.post<Todo>(getUrl('todos'), todo);
}

export function updateTodo(todo: Todo) {
  return axios.put<boolean>(getUrl(`todos/${todo.id}`), todo);
}

export function removeTodo(id: number) {
  return axios.delete(getUrl(`todos/${id}`));
}