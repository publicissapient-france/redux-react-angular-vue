import { todoBuilder } from 'App/domains';
import { AppState } from 'App/store/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from 'App/store/actions/todo.actions';
import { getText } from 'App/store/reducers';

@Component({
  selector: 'app-redux-todo-add',
  template: `
    <app-ui-todo-add
      [text]="text$ | async"
      (textChange)="textChange($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class ReduxTodoAddComponent {
  text$ = this.store.pipe(select(getText));

  constructor(private store: Store<AppState>) { }

  textChange(text: string) {
    this.store.dispatch(new todosActions.Text(text));
  }

  add(text: string) {
    this.store.dispatch(new todosActions.Add(todoBuilder(text)));
  }
}
