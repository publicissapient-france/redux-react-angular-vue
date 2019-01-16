import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getUrl(url: string) {
    return environment.apiBaseUrl + url;
  }

  addTodo(todo: Todo) {
    return this.httpClient.put<boolean>(this.getUrl('todos'), todo);
  }

  getTodos() {
    return this.httpClient.get<Todo[]>(this.getUrl('todos'));
  }

  getTodo(todo: Todo) {
    return this.httpClient.get<Todo>(this.getUrl(`todos/${todo.id}`));
  }

  updateTodo(todo: Todo) {
    return this.httpClient.post<boolean>(this.getUrl(`todos/${todo.id}`), todo);
  }

  removeTodo(todo: Todo) {
    return this.httpClient.delete<boolean>(this.getUrl(`todos/${todo.id}`));
  }
}
