import { Todo, toggleDone } from 'App/domains';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from '../../actions/todo.actions';
import { getTodos } from '../../reducers';

@Component({
  selector: 'app-redux-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todos$ | async"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)">
    </app-ui-todo-list>
  `
})
export class ReduxTodoListComponent {
  todos$ = this.store.pipe(select(getTodos));

  constructor(private store: Store<AppState>) { }

  toggleDone(todo: Todo) {
    this.store.dispatch(new todosActions.Update(toggleDone(todo)));
  }

  remove(todo: Todo) {
    this.store.dispatch(new todosActions.Remove(todo));
  }
}
