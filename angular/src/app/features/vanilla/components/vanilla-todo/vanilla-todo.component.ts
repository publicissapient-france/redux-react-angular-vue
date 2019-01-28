import { Todo, TodoCategory } from 'App/domains/todo.model';
import {
    editText, filterByCategory, filterByText, findTodoByText, getStatus, isTextFree, pipe, todoBuilder, toggleDone
} from 'App/domains/todo.operators';
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
    </div>
    <app-ui-todo-message [hiddenCategory]="hiddenTodoCategory"></app-ui-todo-message>

    <hr>
    <app-ui-todo-list
      [todos]="todosFiltered"
      (toggleDone)="toggleDone($event)"
      (editText)="editText($event)"
      (remove)="remove($event)">
    </app-ui-todo-list>

    <div class="bottom">
      <app-ui-todo-status [status]="status"></app-ui-todo-status>
      <app-ui-todo-switch (categoryChange)="categoryChange($event)"></app-ui-todo-switch>
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

  get hiddenTodoCategory() {
    const todo = findTodoByText(this.todos, this.text);
    if (!todo) {
      return;
    }
    if (todo.done === false && this.category === 'completed') {
      return 'active';
    }
    if (todo.done === true && this.category === 'active') {
      return 'completed';
    }
  }

  get todosFiltered() {
    return pipe<Todo[]>(this.todos)(
      filterByCategory(this.category),
      filterByText(this.filterEnabled ? this.text : '')
    );
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

  editText(event: { todo: Todo, text: string }) {
    this.apiService.updateTodo(editText(event.todo, event.text)).subscribe(this.refresh);
  }

  remove(todo: Todo) {
    this.apiService.removeTodo(todo).subscribe(this.refresh);
  }

  categoryChange(category: TodoCategory) {
    this.category = category;
  }
}
