import { Todo } from 'App/domains/todo.model';
import { isTextValid } from 'App/domains/todo.operators';
import { TodosService } from 'App/services/todos.service';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo',
  template: `
    <app-rxjs-todo-add
      [(text)]="text"
      (textChange)="textChange()"
      [disabled]="preventAdd$ | async">
    </app-rxjs-todo-add>

    <hr>
    <app-rxjs-todo-list [filter]="text"></app-rxjs-todo-list>

    <app-rxjs-todo-status></app-rxjs-todo-status>
    <hr>

    <app-rxjs-todo-add
      [(text)]="text"
      (textChange)="textChange()"
      [disabled]="preventAdd$ | async">
    </app-rxjs-todo-add>
  `,
  styleUrls: ['./rxjs-todo.component.css']
})
export class RxjsTodoComponent {
  text = '';
  text$ = new BehaviorSubject<string>(this.text);

  todos: Todo[];

  preventAdd$ = this.text$.pipe(
    switchMap(() => this.todosService.todos$),
    map(todos => !isTextValid(todos, this.text))
  );

  constructor(private todosService: TodosService) { }

  textChange() {
    this.text$.next(this.text);
  }
}
