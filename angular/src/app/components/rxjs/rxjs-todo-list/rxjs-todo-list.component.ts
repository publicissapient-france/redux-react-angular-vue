import { Todo } from 'App/domains/todo.model';
import { toggleDone } from 'App/domains/todo.operators';
import { ApiService } from 'App/services/api.service';
import { TodosService } from 'App/services/todos.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todosService.todos$ | async"
      [filter]="filter"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)"
      (update)="update($event)">
    </app-ui-todo-list>
  `,
  styleUrls: ['./rxjs-todo-list.component.css']
})
export class RxjsTodoListComponent implements OnInit {
  @Input() filter: string;

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

  update(todo: Todo) {
    this.apiService
      .updateTodo(todo)
      .subscribe(() => this.todosService.sync());
  }
}
