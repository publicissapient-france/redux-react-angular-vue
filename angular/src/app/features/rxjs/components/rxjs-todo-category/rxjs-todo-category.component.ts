import { TodoCategory } from 'App/domains';

import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-category',
  template: `
    <app-ui-todo-category
      [category]="todoService.category$ | async"
      (categoryChange)="categoryChange($event)">
    </app-ui-todo-category>
  `
})
export class RxjsTodoCategoryComponent {
  constructor(public todoService: RxjsTodoService) { }

  categoryChange(category: TodoCategory) {
    this.todoService.setCategory(category);
  }
}
