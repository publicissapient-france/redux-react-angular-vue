import { filterByCategory, Todo, todoBuilder, TodoCategory, toggleDone } from 'App/domains';
import { RestService } from 'App/services/rest.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanilla-todo',
  template: `
    <app-ui-todo-add
      (add)="add($event)">
    </app-ui-todo-add>

    <app-ui-todo-list
      [todos]="todosFiltered"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)">
    </app-ui-todo-list>

    <app-ui-todo-category
      [(category)]="category">
    </app-ui-todo-category>
  `
})
export class VanillaTodoComponent implements OnInit {
  todos: Todo[] = [];
  category: TodoCategory = 'all';

  get todosFiltered() {
    return filterByCategory(this.todos, this.category);
  }

  refresh = () => this.restService.getTodos().subscribe(todos => this.todos = todos);

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.refresh();
  }

  add(text: string) {
    this.restService.addTodo(todoBuilder(text)).subscribe(this.refresh);
  }

  toggleDone(todo: Todo) {
    this.restService.updateTodo(toggleDone(todo)).subscribe(this.refresh);
  }

  remove(todo: Todo) {
    this.restService.removeTodo(todo).subscribe(this.refresh);
  }
}
