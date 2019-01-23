import { todoBuilder } from 'App/domains/todo.operators';
import { AppState } from 'App/reducers';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import * as todosActions from '../../actions/todos.actions';

@Component({
  selector: 'app-redux-todo-add',
  template: `
    <app-ui-todo-add
      [disabled]="disabled"
      [text]="text"
      (textChange)="emitText($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class ReduxTodoAddComponent {
  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  @Input() disabled: boolean;

  constructor(private store: Store<AppState>) { }

  emitText(text: string) {
    this.text = text;
    this.textChange.emit(text);
  }

  add(text: string) {
    this.store.dispatch(new todosActions.Add(todoBuilder(text)));
  }
}
