import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getHiddenCategory } from '../../reducers';

@Component({
  selector: 'app-redux-todo-message',
  template: `
    <app-ui-todo-message
      [hiddenCategory]="hiddenCategory$ | async">
    </app-ui-todo-message>
  `
})
export class ReduxTodoMessageComponent {
  hiddenCategory$ = this.store.pipe(select(getHiddenCategory));

  constructor(private store: Store<AppState>) { }
}
