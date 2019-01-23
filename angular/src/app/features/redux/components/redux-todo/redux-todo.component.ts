import { Component } from '@angular/core';

@Component({
  selector: 'app-redux-todo',
  template: `
    <div class="top">
      <button
        class="filter"
        [class.filter--disabled]="!filterEnabled"
        (click)="filterEnabled = !filterEnabled">
        <fa-icon icon="filter"></fa-icon>
      </button>

      <app-redux-todo-add></app-redux-todo-add>
    </div>

    <hr>
    <app-redux-todo-list></app-redux-todo-list>

    <div class="bottom">
      <app-redux-todo-status></app-redux-todo-status>
      <app-ui-todo-switch (categoryChange)="categoryChange($event)"></app-ui-todo-switch>
    </div>
  `,
  styleUrls: ['./redux-todo.component.css']
})
export class ReduxTodoComponent {
  filterEnabled = false;

  categoryChange() { }
}
