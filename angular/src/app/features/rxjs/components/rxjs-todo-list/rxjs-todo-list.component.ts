import { Todo, TodoCategory } from 'App/domains/todo.model';
import { editText, filterByCategory, filterByText, pipe, toggleDone } from 'App/domains/todo.operators';
import { Subscription } from 'rxjs';

import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-rxjs-todo-list',
  template: `
    <app-ui-todo-list
      [todos]="todosFiltered"
      (toggleDone)="toggleDone($event)"
      (remove)="remove($event)"
      (editText)="editText($event)">
    </app-ui-todo-list>
  `
})
export class RxjsTodoListComponent implements OnInit, OnDestroy {
  @Input() filter: string;

  @Input() category: TodoCategory = 'all';

  todos: Todo[];

  get todosFiltered() {
    return pipe<Todo[]>(this.todos)(
      filterByCategory(this.category),
      filterByText(this.filter)
    );
  }

  subscription: Subscription;

  constructor(private todosService: TodosService) {
    this.subscription = this.todosService.todos$.subscribe(todos => this.todos = todos);
  }

  ngOnInit() {
    this.todosService.load();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleDone(todo: Todo) {
    this.todosService.update(toggleDone(todo));
  }

  remove(todo: Todo) {
    this.todosService.remove(todo);
  }

  editText(event: { todo: Todo; text: string; }) {
    if (event.text) {
      this.todosService.update(editText(event.todo, event.text));
    } else {
      this.remove(event.todo);
    }
  }
}
