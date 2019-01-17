import { Subscription } from 'rxjs';
import { Todo } from 'src/app/domains/todo.model';
import { isTextValid } from 'src/app/domains/todo.operators';
import { TodosService } from 'src/app/services/todos.service';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo',
  template: `
    <app-rxjs-todo-add [(text)]="text" (textChange)="textChange()" [disabled]="!isTextValid"></app-rxjs-todo-add>
    <hr>
    <app-rxjs-todo-list [filter]="text"></app-rxjs-todo-list>
    <hr>
    <app-rxjs-todo-add [(text)]="text" (textChange)="textChange()" [disabled]="!isTextValid"></app-rxjs-todo-add>

    <app-rxjs-todo-status></app-rxjs-todo-status>
  `,
  styleUrls: ['./rxjs-todo.component.css']
})
export class RxjsTodoComponent implements OnInit, OnDestroy {
  text = '';

  todos: Todo[];

  isTextValid: boolean;

  subscription: Subscription;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.subscription = this.todosService.todos$.subscribe(todos => this.todos = todos);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  textChange() {
    this.isTextValid = isTextValid(this.todos, this.text);
  }
}
