import { Component, OnInit } from '@angular/core';

import { RxjsTodoService } from '../../services/rxjs-todo.service';

@Component({
  selector: 'app-rxjs-todo',
  template: `
    <div class="top">
      <app-rxjs-todo-add></app-rxjs-todo-add>
    </div>

    <app-rxjs-todo-list></app-rxjs-todo-list>

    <div class="bottom">
      <app-rxjs-todo-status></app-rxjs-todo-status>
      <app-rxjs-todo-category></app-rxjs-todo-category>
    </div>
  `,
  styleUrls: ['./rxjs-todo.component.css']
})
export class RxjsTodoComponent implements OnInit {

  constructor(private todoService: RxjsTodoService) { }

  ngOnInit() {
    this.todoService.load();
  }
}
