import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getHiddenTodoCategory } from '../../reducers';

@Component({
  selector: 'app-redux-todo-message',
  template: `
    <app-ui-todo-message [hiddenCategory]="hiddenTodoCategory$ | async"></app-ui-todo-message>
  `
})
export class ReduxTodoMessageComponent {
  hiddenTodoCategory$ = this.store.pipe(select(getHiddenTodoCategory));

  constructor(private store: Store<AppState>) { }
}
