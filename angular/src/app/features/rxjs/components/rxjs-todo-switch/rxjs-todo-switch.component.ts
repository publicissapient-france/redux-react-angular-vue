import { TodoCategory } from 'App/domains';

import { Component } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo-switch',
  template: `
    <app-ui-todo-switch
      [category]="todoService.category$ | async"
      (categoryChange)="categoryChange($event)">
    </app-ui-todo-switch>
  `
})
export class RxjsTodoSwitchComponent {
  constructor(public todoService: RxjsTodoService) { }

  categoryChange(category: TodoCategory) {
    this.todoService.setCategory(category);
  }
}
