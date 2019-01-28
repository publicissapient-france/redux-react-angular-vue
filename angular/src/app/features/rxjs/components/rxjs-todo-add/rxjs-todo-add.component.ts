import { todoBuilder } from 'App/domains/todo.operators';

import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-add',
  template: `
    <app-ui-todo-add
      [filterEnabled]="todoService.filterEnabled$ | async"
      [text]="todoService.text$ | async"
      [addDisabled]="!(todoService.isTextFree$ | async)"
      (filterEnabledChange)="filterEnabledChange($event)"
      (textChange)="textChange($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class RxjsTodoAddComponent {
  constructor(public todoService: RxjsTodoService) { }

  filterEnabledChange(filterEnabled: boolean) {
    this.todoService.setFilterEnabled(filterEnabled);
  }

  textChange(text: string) {
    this.todoService.setText(text);
  }

  add(text: string) {
    this.todoService.add(todoBuilder(text));
  }
}
