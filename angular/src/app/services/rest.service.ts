import { Todo } from 'App/domains';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private httpClient: HttpClient) { }

  getUrl(url: string) {
    return environment.restBaseUrl + url;
  }

  getTodos() {
    return this.httpClient.get<Todo[]>(this.getUrl('todos'));
  }

  addTodo(todo: Partial<Todo>) {
    return this.httpClient.post<Todo>(this.getUrl('todos'), todo);
  }

  updateTodo(todo: Todo) {
    return this.httpClient.put<boolean>(this.getUrl(`todos/${todo.id}`), todo);
  }

  removeTodo(todo: Todo) {
    return this.httpClient.delete<boolean>(this.getUrl(`todos/${todo.id}`));
  }
}
