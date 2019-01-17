import { TodoStatus } from 'App/domains/todo.model';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-todo-status',
  template: `
    <div *ngIf="status">
      <span>{{ status.doneCount }}</span> / <span>{{ status.totalCount }}</span>
    </div>
  `,
  styleUrls: ['./ui-todo-status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoStatusComponent {
  @Input() status: TodoStatus;
}
