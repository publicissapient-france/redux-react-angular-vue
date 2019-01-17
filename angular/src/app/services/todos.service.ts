import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Todo } from '../domains/todo.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[];

  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private apiService: ApiService) { }

  sync() {
    this.apiService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.todos$.next(this.todos);
    });
  }
}
