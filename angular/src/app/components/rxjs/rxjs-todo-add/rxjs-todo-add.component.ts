import { ApiService } from 'App/services/api.service';
import { TodosService } from 'App/services/todos.service';

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo-add',
  template: `
    <app-ui-todo-add
      [disabled]="disabled"
      [text]="text"
      (textChange)="emitText($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `,
  styleUrls: ['./rxjs-todo-add.component.css']
})
export class RxjsTodoAddComponent {
  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  @Input() disabled: boolean;

  constructor(
    private apiService: ApiService,
    private todosService: TodosService
  ) { }

  emitText(text: string) {
    this.text = text;
    this.textChange.emit(text);
  }

  add(text: string) {
    this.apiService
      .addTodo({ id: null, text, done: false })
      .subscribe(() => this.todosService.sync());
  }
}
