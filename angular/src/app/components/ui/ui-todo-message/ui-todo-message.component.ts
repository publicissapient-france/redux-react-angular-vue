import { TodoCategory } from 'App/domains/todo.model';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-todo-message',
  template: `
    <p class="message">
      <ng-container *ngIf="hiddenCategory">
        <fa-icon icon="exclamation-triangle"></fa-icon>
        This task appears in the
        "<span class="category">{{ hiddenCategory }}</span>"
        tab!
      </ng-container>
      &nbsp;
    </p>
  `,
  styleUrls: ['./ui-todo-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoMessageComponent {
  @Input() hiddenCategory: TodoCategory;
}
