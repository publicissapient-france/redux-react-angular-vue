import { ApiService } from 'src/app/services/api.service';
import { TodosService } from 'src/app/services/todos.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private todosService: TodosService) { }

  ngOnInit() {
  }

  add(text: string) {
    this.apiService
      .addTodo({ id: null, text, done: false })
      .subscribe(() => this.todosService.sync());
  }
}
