import {
    editText, filterByCategoryAndText, getStatus, hiddenCategory, isTextFree, Todo, todoBuilder,
    TodoCategory, toggleDone
} from 'App/domains';
import { ApiService } from 'App/services/api.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanilla-todo',
  template: `
    <div class="top">
      <app-ui-todo-add
        [(filterEnabled)]="filterEnabled"
        [(text)]="text"
        [addDisabled]="addDisabled"
        (add)="add($event)">
      </app-ui-todo-add>
      <app-ui-todo-message [hiddenCategory]="hiddenCategory"></app-ui-todo-message>
    </div>

    <app-ui-todo-list
      [todos]="todosFiltered"
      (toggleDone)="toggleDone($event)"
      (editText)="editText($event)"
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

  filterEnabled = false;

  text = '';

  category: TodoCategory = 'all';

  get addDisabled() {
    return !isTextFree(this.todos, this.text);
  }

  get hiddenCategory() {
    return hiddenCategory(this.todos, this.text, this.category);
  }

  get filter() {
    return this.filterEnabled ? this.text : '';
  }

  get todosFiltered() {
    return filterByCategoryAndText(this.todos, this.category, this.filter);
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

  editText({ todo, text }: { todo: Todo, text: string }) {
    if (text) {
      this.apiService.updateTodo(editText(todo, text)).subscribe(this.refresh);
    } else {
      this.remove(todo);
    }
  }

  remove(todo: Todo) {
    this.apiService.removeTodo(todo).subscribe(this.refresh);
  }
}
