import { of } from 'rxjs';

import { Component } from '@angular/core';
import { TodoCategory } from 'App/domains';

@Component({
  selector: 'app-redux-todo-category',
  template: `
    <app-ui-todo-category
      [category]="category$ | async"
      (categoryChange)="emitCategory($event)">
    </app-ui-todo-category>
  `
})
export class ReduxTodoCategoryComponent {
  category$ = of('all');

  constructor() { }

  emitCategory(category: TodoCategory) {

  }
}
