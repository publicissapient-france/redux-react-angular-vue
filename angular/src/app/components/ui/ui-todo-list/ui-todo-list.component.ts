import { Todo } from 'App/domains/todo.model';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-list',
  template: `
    <ul *ngIf="todos!.length; else empty" class="list">
      <li *ngFor="let todo of todos; trackBy: trackByTodoId" class="list-item">
        <button (click)="emitToggleDone(todo)">
          <fa-icon [icon]="getToggleIcon(todo)"></fa-icon>
        </button>

        <span
          class="text"
          [class.text--done]="todo.done"
          [appContentEditable]="!todo.done"
          appContentEditableClass="text--edit"
          (appContentEditableChange)="emiEditText(todo, $event)">
          {{ todo.text }}
        </span>

        <button (click)="emitRemove(todo)">
          <fa-icon icon="trash"></fa-icon>
        </button>
      </li>
    </ul>

    <ng-template #empty>
      <div class="hello">
        <fa-icon icon="clipboard-list" size="3x"></fa-icon>
      </div>
    </ng-template>
  `,
  styleUrls: ['./ui-todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoListComponent {
  @Input() todos: Todo[];

  @Output() toggleDone = new EventEmitter<Todo>();
  @Output() editText = new EventEmitter<{ todo: Todo; text: string; }>();
  @Output() remove = new EventEmitter<Todo>();

  emitToggleDone(todo: Todo) {
    this.toggleDone.emit(todo);
  }

  emiEditText(todo: Todo, text: string) {
    this.editText.emit({ todo, text });
  }

  emitRemove(todo: Todo) {
    this.remove.emit(todo);
  }

  trackByTodoId(index: number, todo: Todo) {
    return todo.id;
  }

  getToggleIcon(todo: Todo) {
    return todo.done ? 'toggle-off' : 'toggle-on';
  }
}
