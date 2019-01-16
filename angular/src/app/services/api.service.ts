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

  getTodos() {
    return this.httpClient.get<Todo[]>(this.getUrl('todos/all'));
  }

  addTodo(todo: Todo) {
    return this.httpClient.post<boolean>(this.getUrl('todos/add'), todo);
  }
}
