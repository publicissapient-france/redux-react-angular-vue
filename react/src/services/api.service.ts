import axios from 'axios';

import { Todo } from '../domains/todo.model';

const apiBaseUrl = 'http://127.0.0.1:3100/';

export class ApiService {
  static getUrl(url: string) {
    return apiBaseUrl + url;
  }

  static getTodos() {
    return axios.get<Todo[]>(this.getUrl('todos'));
  }

  static getTodo(todo: Todo) {
    return axios.get<Todo>(this.getUrl(`todos/${todo.id}`));
  }

  static addTodo(todo: Partial<Todo>) {
    return axios.post<Todo>(this.getUrl('todos'), todo);
  }

  static updateTodo(todo: Todo) {
    return axios.put<boolean>(this.getUrl(`todos/${todo.id}`), todo);
  }

  static removeTodo(todo: Todo) {
    return axios.delete(this.getUrl(`todos/${todo.id}`));
  }
}
