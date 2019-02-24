import { TodoCategory } from 'App/domains';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from '../../actions/todo.actions';
import { getCategory } from '../../reducers';

@Component({
  selector: 'app-redux-todo-category',
  template: `
    <app-ui-todo-category
      [category]="category$ | async"
      (categoryChange)="categoryChange($event)">
    </app-ui-todo-category>
  `
})
export class ReduxTodoCategoryComponent {
  category$ = this.store.pipe(select(getCategory));

  constructor(private store: Store<AppState>) { }

  categoryChange(category: TodoCategory) {
    this.store.dispatch(new todosActions.Category(category));
  }
}
