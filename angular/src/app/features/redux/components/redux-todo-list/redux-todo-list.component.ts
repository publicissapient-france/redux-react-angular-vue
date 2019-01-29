import { Todo } from 'App/domains/todo.model';
import { editText, toggleDone } from 'App/domains/todo.operators';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
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
export class ReduxTodoListComponent {
  todosFiltered$ = this.store.pipe(select(getTodosFiltered));

  constructor(private store: Store<AppState>) { }

  toggleDone(todo: Todo) {
    this.store.dispatch(new todosActions.Update(toggleDone(todo)));
  }

  remove(todo: Todo) {
    this.store.dispatch(new todosActions.Remove(todo));
  }

  editText({ todo, text }: { todo: Todo; text: string; }) {
    if (text) {
      this.store.dispatch(new todosActions.Update(editText(todo, text)));
    } else {
      this.remove(todo);
    }
  }
}
