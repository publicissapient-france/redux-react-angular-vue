import { Todo, TodoCategory } from 'App/domains/todo.model';
import { filterByCategoryAndText, hiddenCategory, isTextFree } from 'App/domains/todo.operators';
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

  private filterEnabled = false;
  filterEnabled$ = new BehaviorSubject<boolean>(this.filterEnabled);

  filter$ = combineLatest(this.text$, this.filterEnabled$).pipe(
    map(([text, filterEnabled]) => filterEnabled ? text : '')
  );

  todosFiltered$ = combineLatest(this.todos$, this.category$, this.filter$).pipe(
    map(([todos, category, filter]) => filterByCategoryAndText(todos, category, filter))
  );

  isTextFree$ = combineLatest(this.todos$, this.text$).pipe(
    map(([todos, text]) => isTextFree(todos, text))
  );

  hiddenCategory$ = combineLatest(this.todos$, this.text$, this.category$).pipe(
    map(([todos, text, category]) => {
      return hiddenCategory(todos, text, category);
    })
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

  setFilterEnabled(filterEnabled: boolean) {
    this.filterEnabled = filterEnabled;
    this.filterEnabled$.next(filterEnabled);
  }
}
