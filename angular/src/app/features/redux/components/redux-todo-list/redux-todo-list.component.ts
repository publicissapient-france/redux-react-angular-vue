import { Todo, TodoCategory } from 'App/domains/todo.model';
import { editText, toggleDone } from 'App/domains/todo.operators';
import { AppState } from 'App/reducers';

import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from '../../actions/todos.actions';
import { getTodosFiltered } from '../../reducers';

@Component({
  selector: 'app-redux-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todosFiltered$ | async"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)"
      (editText)="editText($event)">
    </app-ui-todo-list>
  `
})
export class ReduxTodoListComponent implements OnInit {
  @Input() filter: string;

  @Input() category: TodoCategory = 'all';

  todosFiltered$ = this.store.pipe(select(getTodosFiltered));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new todosActions.Load());
  }

  toggleDone(todo: Todo) {
    this.store.dispatch(new todosActions.Update(toggleDone(todo)));
  }

  remove(todo: Todo) {
    this.store.dispatch(new todosActions.Remove(todo));
  }

  editText(event: { todo: Todo; text: string; }) {
    if (event.text) {
      this.store.dispatch(new todosActions.Update(editText(event.todo, event.text)));
    } else {
      this.remove(event.todo);
    }
  }
}
