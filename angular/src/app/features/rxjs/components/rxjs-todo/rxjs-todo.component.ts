import { TODO_DEF_CAT } from 'App/domains/todo.config';
import { TodoCategory } from 'App/domains/todo.model';
import { isTextFree } from 'App/domains/todo.operators';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Component } from '@angular/core';

import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-rxjs-todo',
  template: `
    <div class="top">
      <button
        class="filter"
        [class.filter--disabled]="!filterEnabled"
        (click)="filterEnabled = !filterEnabled">
        <fa-icon icon="filter"></fa-icon>
      </button>

      <app-rxjs-todo-add
        [(text)]="text"
        (textChange)="textChange()"
        [disabled]="preventAdd$ | async">
      </app-rxjs-todo-add>
    </div>

    <hr>
    <app-rxjs-todo-list [filter]="getFilter()" [category]="category"></app-rxjs-todo-list>

    <div class="bottom">
      <app-rxjs-todo-status></app-rxjs-todo-status>
      <app-ui-todo-switch (categoryChange)="categoryChange($event)"></app-ui-todo-switch>
    </div>
  `,
  styleUrls: ['./rxjs-todo.component.css']
})
export class RxjsTodoComponent {
  text = '';
  text$ = new BehaviorSubject<string>(this.text);

  category: TodoCategory = TODO_DEF_CAT;

  preventAdd$ = this.text$.pipe(
    switchMap(() => this.todosService.todos$),
    map(todos => !isTextFree(todos, this.text))
  );

  filterEnabled = false;

  constructor(private todosService: TodosService) { }

  textChange() {
    this.text$.next(this.text);
  }

  categoryChange(category: TodoCategory) {
    this.category = category;
  }

  getFilter() {
    return this.filterEnabled ? this.text : '';
  }
}