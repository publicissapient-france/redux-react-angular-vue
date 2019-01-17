import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo',
  template: `
    <app-rxjs-todo-add [(text)]="text"></app-rxjs-todo-add>
    <hr>
    <app-rxjs-todo-list [filter]="text"></app-rxjs-todo-list>
    <hr>
    <app-rxjs-todo-add [(text)]="text"></app-rxjs-todo-add>

    <app-rxjs-todo-status></app-rxjs-todo-status>
  `,
  styleUrls: ['./rxjs-todo.component.css']
})
export class RxjsTodoComponent {
  text = '';
}
