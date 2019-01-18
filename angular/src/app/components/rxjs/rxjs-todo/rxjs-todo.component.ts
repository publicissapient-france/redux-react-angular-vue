import { Todo } from 'App/domains/todo.model';
import { isTextValid } from 'App/domains/todo.operators';
import { TodosService } from 'App/services/todos.service';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo',
  template: `
    <button
      class="filter"
      [class.disabled]="!filterEnabled"
      (click)="filterEnabled = !filterEnabled">
      <fa-icon icon="filter"></fa-icon>
    </button>

    <app-rxjs-todo-add
      [(text)]="text"
      (textChange)="textChange()"
      [disabled]="preventAdd$ | async">
    </app-rxjs-todo-add>

    <hr>
    <app-rxjs-todo-list [filter]="getFilter()"></app-rxjs-todo-list>

    <app-rxjs-todo-status></app-rxjs-todo-status>
    <!--<hr>

    <app-rxjs-todo-add
      [(text)]="text"
      (textChange)="textChange()"
      [disabled]="preventAdd$ | async">
    </app-rxjs-todo-add>-->
  `,
  styleUrls: ['./rxjs-todo.component.css']
})
export class RxjsTodoComponent {
  todos: Todo[];

  text = '';
  text$ = new BehaviorSubject<string>(this.text);

  preventAdd$ = this.text$.pipe(
    switchMap(() => this.todosService.todos$),
    map(todos => !isTextValid(todos, this.text))
  );

  filterEnabled = true;

  constructor(private todosService: TodosService) { }

  textChange() {
    this.text$.next(this.text);
  }

  getFilter() {
    return this.filterEnabled ? this.text : '';
  }
}
