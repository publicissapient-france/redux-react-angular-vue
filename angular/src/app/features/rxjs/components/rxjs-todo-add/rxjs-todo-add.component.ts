import { todoBuilder } from 'App/domains/todo.operators';

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-rxjs-todo-add',
  template: `
    <app-ui-todo-add
      [filterEnabled]="filterEnabled"
      [text]="text"
      [addDisabled]="disabled"
      (filterEnabledChange)="emitFilterEnabled($event)"
      (textChange)="emitText($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class RxjsTodoAddComponent {
  @Input() filterEnabled = false;
  @Output() filterEnabledChange = new EventEmitter<boolean>();

  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  @Input() disabled: boolean;

  constructor(private todosService: TodosService) { }

  emitFilterEnabled(filterEnabled: boolean) {
    this.filterEnabled = filterEnabled;
    this.filterEnabledChange.emit(filterEnabled);
  }

  emitText(text: string) {
    this.text = text;
    this.textChange.emit(text);
  }

  add(text: string) {
    this.todosService.add(todoBuilder(text));
  }
}
