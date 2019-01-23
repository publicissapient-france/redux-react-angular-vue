import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-todo',
  template: `
    <app-redux-todo-add></app-redux-todo-add>
    <app-redux-todo-list></app-redux-todo-list>
  `,
  styleUrls: ['./redux-todo.component.css']
})
export class ReduxTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
