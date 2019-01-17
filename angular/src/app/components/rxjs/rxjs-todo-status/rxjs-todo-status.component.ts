import { getStatus } from 'App/domains/todo.operators';
import { TodosService } from 'App/services/todos.service';

import { Component } from '@angular/core';

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
