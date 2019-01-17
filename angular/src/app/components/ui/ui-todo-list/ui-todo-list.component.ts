import { Todo } from 'src/app/models/todo.model';

import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, Output
} from '@angular/core';

@Component({
  selector: 'app-ui-todo-list',
  templateUrl: './ui-todo-list.component.html',
  styleUrls: ['./ui-todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoListComponent {
  @Input() todos: Todo[];

  @Output() toggleDone = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  trackByTodoId(index: number, todo: Todo) {
    return todo.id;
  }

  emitToggleDone(todo: Todo) {
    this.toggleDone.emit(todo);
  }

  emitRemove(todo: Todo) {
    this.remove.emit(todo);
  }
}
