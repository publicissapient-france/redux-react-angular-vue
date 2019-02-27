import { Todo } from 'App/domains';
import { of } from 'rxjs';

import { Component } from '@angular/core';

@Component({
  selector: 'app-redux-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todos$ | async"
      (toggleDone)="toggleDone($event)">
    </app-ui-todo-list>
  `
})
export class ReduxTodoListComponent {
  todos$ = of([]);

  constructor() { }

  toggleDone(todo: Todo) {

  }
}
