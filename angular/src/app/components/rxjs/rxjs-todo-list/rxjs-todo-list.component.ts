import { Todo } from 'src/app/domains/todo.model';
import { toggleDone } from 'src/app/domains/todo.operators';
import { ApiService } from 'src/app/services/api.service';
import { TodosService } from 'src/app/services/todos.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todosService.todos$ | async"
      [filter]="filter"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)">
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
}
