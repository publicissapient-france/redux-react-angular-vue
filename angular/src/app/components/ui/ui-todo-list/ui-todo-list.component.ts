import { Todo } from 'App/domains/todo.model';
import { filter } from 'App/domains/todo.operators';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-list',
  template: `
    <ul *ngIf="todosFiltered!.length">
      <li *ngFor="let todo of todosFiltered; trackBy: trackByTodoId">
        {{ todo.text }}
        <button (click)="emitToggleDone(todo)">{{ todo.done }}</button>
        <button (click)="emitRemove(todo)">Remove</button>
      </li>
    </ul>
  `,
  styleUrls: ['./ui-todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoListComponent {
  @Input() todos: Todo[];

  @Input() filter: string;

  get todosFiltered() {
    return filter(this.todos, this.filter);
  }

  @Output() toggleDone = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  emitToggleDone(todo: Todo) {
    this.toggleDone.emit(todo);
  }

  emitRemove(todo: Todo) {
    this.remove.emit(todo);
  }

  trackByTodoId(index: number, todo: Todo) {
    return todo.id;
  }
}
