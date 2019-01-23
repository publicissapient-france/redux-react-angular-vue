import { getStatus } from 'App/domains/todo.operators';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getTodos } from '../../reducers';

@Component({
  selector: 'app-redux-todo-status',
  template: `
    <app-ui-todo-status
      *ngIf="todos$ | async; let todos"
      [status]="getStatus(todos)">
    </app-ui-todo-status>
  `
})
export class ReduxTodoStatusComponent {
  getStatus = getStatus;

  todos$ = this.store.pipe(select(getTodos));

  constructor(private store: Store<AppState>) { }
}
