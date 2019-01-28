import { TodoCategory } from 'App/domains/todo.model';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-todo-message',
  template: `
    <p class="message">
      <ng-container *ngIf="hiddenCategory">
        <fa-icon icon="exclamation-triangle"></fa-icon>
        This item is already {{ hiddenCategory }}!
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
