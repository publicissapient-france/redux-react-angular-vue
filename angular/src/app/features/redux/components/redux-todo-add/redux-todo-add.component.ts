import { todoBuilder } from 'App/domains/todo.operators';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from '../../actions/todos.actions';
import { getFilter, getFilterEnabled, getIsTextFree } from '../../reducers';

@Component({
  selector: 'app-redux-todo-add',
  template: `
    <app-ui-todo-add
      [filterEnabled]="filterEnabled$ | async"
      [text]="filter$ | async"
      [addDisabled]="!(isTextFree$ | async)"
      (filterEnabledChange)="filterEnabledChange($event)"
      (textChange)="textChange($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class ReduxTodoAddComponent {
  filterEnabled$  = this.store.pipe(select(getFilterEnabled));
  filter$         = this.store.pipe(select(getFilter));
  isTextFree$     = this.store.pipe(select(getIsTextFree));

  constructor(private store: Store<AppState>) { }

  filterEnabledChange(filterEnabled: boolean) { // TODO: Use the parameter...
    this.store.dispatch(new todosActions.SwitchFilterEnabled());
  }

  textChange(text: string) {
    this.store.dispatch(new todosActions.Filter(text));
  }

  add(text: string) {
    this.store.dispatch(new todosActions.Add(todoBuilder(text)));
  }
}
