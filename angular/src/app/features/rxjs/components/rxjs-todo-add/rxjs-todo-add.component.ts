import { todoBuilder } from 'App/domains/todo.operators';

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodosService } from '../../services/todos.service';

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

  constructor(private todosService: TodosService) { }

  emitText(text: string) {
    this.text = text;
    this.textChange.emit(text);
  }

  add(text: string) {
    this.todosService.add(todoBuilder(text));
  }
}
