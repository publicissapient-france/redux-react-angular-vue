import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { filter, toggleDone } from 'src/app/models/todo.operators';
import { ApiService } from 'src/app/services/api.service';
import { TodosService } from 'src/app/services/todos.service';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo-list',
  templateUrl: './rxjs-todo-list.component.html',
  styleUrls: ['./rxjs-todo-list.component.css']
})
export class RxjsTodoListComponent implements OnInit, OnDestroy {
  text = '';

  todos: Todo[] = [];
  filteredTodos: Todo[] = [];

  subscription: Subscription;

  constructor(
    private apiService: ApiService,
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.subscription = this.todosService.todos$.subscribe(todos => {
      this.todos = todos;
      this.filterTodos();
    });

    this.todosService.sync();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterTodos() {
    this.filteredTodos = filter(this.todos, this.text);
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
