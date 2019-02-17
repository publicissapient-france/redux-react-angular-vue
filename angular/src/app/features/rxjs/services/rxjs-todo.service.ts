import {
  filterByCategory, Todo, TodoCategory
} from 'App/domains';
import { ApiService } from 'App/services/api.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

// TODO: handle errors in both `api.servive.ts` and `todo.service.ts`

@Injectable()
export class RxjsTodoService {
  private todos: Todo[] = [];
  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  private text = '';
  text$ = new BehaviorSubject<string>(this.text);

  private category: TodoCategory = 'all';
  category$ = new BehaviorSubject<TodoCategory>(this.category);

  todosFiltered$ = combineLatest(this.todos$, this.category$).pipe(
    map(([todos, category]) => filterByCategory(todos, category))
  );

  constructor(private apiService: ApiService) { }

  load() {
    this.apiService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.todos$.next(this.todos);
    });
  }

  add(todo: Partial<Todo>) {
    this.apiService
      .addTodo(todo)
      .subscribe(t => {
        this.todos = [t, ...this.todos];
        this.todos$.next(this.todos);
      });
  }

  update(todo: Todo) {
    this.apiService
      .updateTodo(todo)
      .subscribe(() => {
        this.splice(todo, 'update');
        this.todos$.next(this.todos);
      });
  }

  remove(todo: Todo) {
    this.apiService
      .removeTodo(todo)
      .subscribe(() => {
        this.splice(todo, 'remove');
        this.todos$.next(this.todos);
      });
  }

  private splice(todo: Todo, action: 'update' | 'remove') {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index === -1) {
      return false;
    }
    this.todos = [...this.todos];
    switch (action) {
      case 'update': this.todos.splice(index, 1, todo); break;
      case 'remove': this.todos.splice(index, 1); break;
    }
    return true;
  }

  setText(text: string) {
    this.text = text;
    this.text$.next(text);
  }

  setCategory(category: TodoCategory) {
    this.category = category;
    this.category$.next(category);
  }
}
