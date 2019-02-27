import { of } from 'rxjs';

import { Component } from '@angular/core';

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
  text$ = of('');

  constructor() { }

  textChange(text: string) {

  }

  add(text: string) {

  }
}
