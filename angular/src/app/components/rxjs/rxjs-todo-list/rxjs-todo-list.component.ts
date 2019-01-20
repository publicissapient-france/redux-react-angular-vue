import { Todo, TodoCategory } from 'App/domains/todo.model';
import { editText, toggleDone } from 'App/domains/todo.operators';
import { ApiService } from 'App/services/api.service';
import { TodosService } from 'App/services/todos.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todosService.todos$ | async"
      [filter]="filter"
      [category]="category"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)"
      (editText)="editText($event)">
    </app-ui-todo-list>
  `,
  styleUrls: ['./rxjs-todo-list.component.css']
})
export class RxjsTodoListComponent implements OnInit {
  @Input() filter: string;

  @Input() category: TodoCategory;

  constructor(
    private apiService: ApiService,
    public todosService: TodosService
  ) { }

  ngOnInit() {
    this.todosService.sync();
  }

  toggleDone(todo: Todo) {
    this.apiService
      .updateTodo(toggleDone(todo))
      .subscribe(() => this.todosService.sync());
  }

  remove(todo: Todo) {
    this.apiService
      .removeTodo(todo)
      .subscribe(() => this.todosService.sync());
  }

  editText(event: { todo: Todo; text: string; }) {
    if (event.text) {
      this.apiService
        .updateTodo(editText(event.todo, event.text))
        .subscribe(() => this.todosService.sync());
    } else {
      this.remove(event.todo);
    }
  }
}
