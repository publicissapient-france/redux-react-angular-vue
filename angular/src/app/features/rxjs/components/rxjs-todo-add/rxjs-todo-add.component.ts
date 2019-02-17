import { todoBuilder } from 'App/domains';

import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-add',
  template: `
    <app-ui-todo-add
      [text]="todoService.text$ | async"
      (textChange)="textChange($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class RxjsTodoAddComponent {
  constructor(public todoService: RxjsTodoService) { }

  textChange(text: string) {
    this.todoService.setText(text);
  }

  add(text: string) {
    this.todoService.add(todoBuilder(text));
  }
}
