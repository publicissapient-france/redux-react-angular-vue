import {
    filterByCategory, getStatus, Todo, todoBuilder,
    TodoCategory, toggleDone
} from 'App/domains';
import { ApiService } from 'App/services/api.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanilla-todo',
  template: `
    <div class="top">
      <app-ui-todo-add
        [(text)]="text"
        (add)="add($event)">
      </app-ui-todo-add>
    </div>

    <app-ui-todo-list
      [todos]="todosFiltered"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)">
    </app-ui-todo-list>

    <div class="bottom">
      <app-ui-todo-status [status]="status"></app-ui-todo-status>
      <app-ui-todo-switch [(category)]="category"></app-ui-todo-switch>
    </div>
  `,
  styleUrls: ['./vanilla-todo.component.css']
})
export class VanillaTodoComponent implements OnInit {
  todos: Todo[] = [];

  text = '';

  category: TodoCategory = 'all';

  get todosFiltered() {
    return filterByCategory(this.todos, this.category);
  }

  get status() {
    return getStatus(this.todos);
  }

  refresh = () => this.apiService.getTodos().subscribe(todos => this.todos = todos);

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.refresh();
  }

  add(text: string) {
    this.apiService.addTodo(todoBuilder(text)).subscribe(this.refresh);
  }

  toggleDone(todo: Todo) {
    this.apiService.updateTodo(toggleDone(todo)).subscribe(this.refresh);
  }

  remove(todo: Todo) {
    this.apiService.removeTodo(todo).subscribe(this.refresh);
  }
}
