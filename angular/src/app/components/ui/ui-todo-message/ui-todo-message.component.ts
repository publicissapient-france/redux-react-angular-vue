import { TodoCategory } from 'App/domains/todo.model';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-todo-message',
  template: `
    <p class="message">
      <ng-container *ngIf="category">
        <fa-icon icon="exclamation-triangle"></fa-icon>
        This item is already {{ category }}!
      </ng-container>
      &nbsp;
    </p>
  `,
  styleUrls: ['./ui-todo-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoMessageComponent {
  @Input() category: TodoCategory;
}
