import { TodoCategory } from 'App/domains/todo.model';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from '../../actions/todos.actions';
import { getCategory } from '../../reducers';

@Component({
  selector: 'app-redux-todo',
  template: `
    <div class="top">
      <button
        class="filter"
        [class.filter--disabled]="!filterEnabled"
        (click)="filterEnabled = !filterEnabled">
        <fa-icon icon="filter"></fa-icon>
      </button>

      <app-redux-todo-add></app-redux-todo-add>
    </div>

    <hr>
    <app-redux-todo-list
      [filter]="getFilter()"
      [category]="category$ | async">
    </app-redux-todo-list>

    <div class="bottom">
      <app-redux-todo-status></app-redux-todo-status>

      <app-ui-todo-switch
        [category]="category$ | async"
        (categoryChange)="categoryChange($event)">
      </app-ui-todo-switch>
    </div>
  `,
  styleUrls: ['./redux-todo.component.css']
})
export class ReduxTodoComponent {
  category$ = this.store.pipe(select(getCategory));

  filterEnabled = false;

  constructor(private store: Store<AppState>) { }

  categoryChange(category: TodoCategory) {
    this.store.dispatch(new todosActions.Category(category));
  }

  getFilter() {
    return ''; // TODO...
  }
}
