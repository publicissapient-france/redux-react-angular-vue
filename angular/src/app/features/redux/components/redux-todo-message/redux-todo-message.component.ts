import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getCategoryOfHiddenTodo } from '../../reducers';

@Component({
  selector: 'app-redux-todo-message',
  template: `
    <app-ui-todo-message [category]="categoryOfHiddenTodo$ | async"></app-ui-todo-message>
  `
})
export class ReduxTodoMessageComponent {
  categoryOfHiddenTodo$ = this.store.pipe(select(getCategoryOfHiddenTodo));

  constructor(private store: Store<AppState>) { }
}
