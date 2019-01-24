import { TodoCategory } from 'App/domains/todo.model';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from '../../actions/todos.actions';
import { getCategory, getFilter, getFilterEnabled, getIsTextFree, getLiveFilter } from '../../reducers';

@Component({
  selector: 'app-redux-todo',
  template: `
    <div class="top">
      <button
        class="filter"
        [class.filter--disabled]="!(filterEnabled$ | async)"
        (click)="switchFilterEnabled()">
        <fa-icon icon="filter"></fa-icon>
      </button>

      <app-redux-todo-add
        [text]="filter$ | async"
        (textChange)="textChange($event)"
        [disabled]="!(isTextFree$ | async)">
      </app-redux-todo-add>
    </div>

    <hr>
    <app-redux-todo-list
      [filter]="liveFilter$ | async"
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
  category$       = this.store.pipe(select(getCategory));
  filter$         = this.store.pipe(select(getFilter));
  filterEnabled$  = this.store.pipe(select(getFilterEnabled));
  liveFilter$     = this.store.pipe(select(getLiveFilter));
  isTextFree$     = this.store.pipe(select(getIsTextFree));

  constructor(private store: Store<AppState>) { }

  textChange(text: string) {
    this.store.dispatch(new todosActions.Filter(text));
  }

  categoryChange(category: TodoCategory) {
    this.store.dispatch(new todosActions.Category(category));
  }

  switchFilterEnabled() {
    this.store.dispatch(new todosActions.SwitchFilterEnabled());
  }
}
