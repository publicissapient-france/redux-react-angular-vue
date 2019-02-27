import { Component } from '@angular/core';

@Component({
  selector: 'app-redux-todo-add',
  template: `
    <app-ui-todo-add
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class ReduxTodoAddComponent {
  constructor() { }

  add(text: string) {

  }
}
