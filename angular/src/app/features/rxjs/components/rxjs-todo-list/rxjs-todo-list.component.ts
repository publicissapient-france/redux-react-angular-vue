import { Todo, toggleDone } from 'App/domains';

import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todoService.todosFiltered$ | async"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)">
    </app-ui-todo-list>
  `
})
export class RxjsTodoListComponent {
  constructor(public todoService: RxjsTodoService) { }

  toggleDone(todo: Todo) {
    this.todoService.update(toggleDone(todo));
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
  }
}
