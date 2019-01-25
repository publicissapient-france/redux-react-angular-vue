import { Component } from '@angular/core';

@Component({
  selector: 'app-redux-todo',
  template: `
    <div class="top">
      <app-redux-todo-add></app-redux-todo-add>
    </div>

    <hr>
    <app-redux-todo-list></app-redux-todo-list>

    <div class="bottom">
      <app-redux-todo-status></app-redux-todo-status>
      <app-redux-todo-switch></app-redux-todo-switch>
    </div>
  `,
  styleUrls: ['./redux-todo.component.css']
})
export class ReduxTodoComponent { }
