import { getStatus } from 'App/domains/todo.operators';

import { Component } from '@angular/core';

import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-rxjs-todo-status',
  template: `
    <app-ui-todo-status
      *ngIf="todosService.todos$ | async; let todos"
      [status]="getStatus(todos)">
    </app-ui-todo-status>
  `,
  styleUrls: ['./rxjs-todo-status.component.css']
})
export class RxjsTodoStatusComponent {
  getStatus = getStatus;

  constructor(
    public todosService: TodosService
  ) { }
}
