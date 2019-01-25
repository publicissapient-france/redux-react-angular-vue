import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ReduxTodoAddComponent } from './components/redux-todo-add/redux-todo-add.component';
import { ReduxTodoListComponent } from './components/redux-todo-list/redux-todo-list.component';
import { ReduxTodoStatusComponent } from './components/redux-todo-status/redux-todo-status.component';
import { ReduxTodoSwitchComponent } from './components/redux-todo-switch/redux-todo-switch.component';
import { ReduxTodoComponent } from './components/redux-todo/redux-todo.component';
import { TodosEffects } from './effects/todos.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    ReduxTodoComponent,
    ReduxTodoAddComponent,
    ReduxTodoListComponent,
    ReduxTodoStatusComponent,
    ReduxTodoSwitchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReduxTodoComponent }]),
    StoreModule.forFeature('redux', reducers),
    EffectsModule.forFeature([TodosEffects]),
    AppSharedModule
  ],
  exports: [
    ReduxTodoComponent
  ]
})
export class ReduxTodoModule { }
