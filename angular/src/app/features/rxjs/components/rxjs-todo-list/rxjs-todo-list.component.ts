import { Todo } from 'App/domains/todo.model';
import { editText, toggleDone } from 'App/domains/todo.operators';

import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todoService.todosFiltered$ | async"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)"
      (editText)="editText($event)">
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

  editText({ todo, text }: { todo: Todo; text: string; }) {
    if (text) {
      this.todoService.update(editText(todo, text));
    } else {
      this.remove(todo);
    }
  }
}
