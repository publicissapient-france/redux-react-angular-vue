import { TodoCategory } from 'App/domains';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ui-todo-category',
  template: `
    <button
      *ngFor="let item of list"
      class="button"
      [class.button--active]="category === item"
      (click)="select(item)">
      {{ item }}
    </button>
  `,
  styleUrls: ['./ui-todo-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiTodoCategoryComponent {
  @Input() category: TodoCategory = 'all';
  @Output() categoryChange = new EventEmitter<TodoCategory>();

  list: TodoCategory[] = ['all', 'active', 'completed'];

  select(category: TodoCategory) {
    this.categoryChange.emit(category);
  }
}
