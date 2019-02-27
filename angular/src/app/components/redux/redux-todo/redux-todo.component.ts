import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-todo',
  template: `
    <div class="top">
      <app-redux-todo-add></app-redux-todo-add>
    </div>

    <app-redux-todo-list></app-redux-todo-list>

    <div class="bottom">
      <app-redux-todo-category></app-redux-todo-category>
    </div>
  `,
  styleUrls: ['./redux-todo.component.css']
})
export class ReduxTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
