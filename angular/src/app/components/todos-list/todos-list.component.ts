import { TodosService } from 'src/app/services/todos.service';

import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit() {
    this.todosService.sync();
  }

  trackByTodoId(index: number, todo: Todo) {
    return todo.id;
  }
}
