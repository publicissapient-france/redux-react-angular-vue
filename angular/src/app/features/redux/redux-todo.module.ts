import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ReduxTodoAddComponent } from './components/redux-todo-add/redux-todo-add.component';
import { ReduxTodoCategoryComponent } from './components/redux-todo-category/redux-todo-category.component';
import { ReduxTodoListComponent } from './components/redux-todo-list/redux-todo-list.component';
import { ReduxTodoStatusComponent } from './components/redux-todo-status/redux-todo-status.component';
import { ReduxTodoComponent } from './components/redux-todo/redux-todo.component';
import { TodosEffects } from './effects/todo.effects';
import { FEATURE_NAME, reducers } from './reducers';

@NgModule({
  declarations: [
    ReduxTodoAddComponent,
    ReduxTodoCategoryComponent,
    ReduxTodoListComponent,
    ReduxTodoStatusComponent,
    ReduxTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReduxTodoComponent }]),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([TodosEffects]),
    AppSharedModule
  ],
  exports: [
    ReduxTodoComponent
  ]
})
export class ReduxTodoModule { }
