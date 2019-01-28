import { getStatus } from 'App/domains/todo.operators';

import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-status',
  template: `
    <app-ui-todo-status
      *ngIf="todosService.todos$ | async; let todos"
      [status]="getStatus(todos)">
    </app-ui-todo-status>
  `
})
export class RxjsTodoStatusComponent {
  getStatus = getStatus;

  constructor(
    public todosService: RxjsTodoService
  ) { }
}
