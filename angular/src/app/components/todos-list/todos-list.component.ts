import { Todo } from 'src/app/models/todo.model';
import { ApiService } from 'src/app/services/api.service';
import { TodosService } from 'src/app/services/todos.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    public todosService: TodosService
    ) { }

  ngOnInit() {
    this.todosService.sync();
  }

  trackByTodoId(index: number, todo: Todo) {
    return todo.id;
  }

  toggleDone(todo: Todo) {
    this.apiService
      .updateTodo({ ...todo, done: !todo.done })
      .subscribe(() => this.todosService.sync());
  }

  remove(todo: Todo) {
    this.apiService
      .removeTodo(todo)
      .subscribe(() => this.todosService.sync());
  }
}
