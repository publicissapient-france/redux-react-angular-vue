import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ReduxTodoComponent } from './components/redux-todo/redux-todo.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    ReduxTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReduxTodoComponent }]),
    StoreModule.forFeature('redux', reducers),
    EffectsModule.forFeature([]),
    AppSharedModule
  ],
  exports: [
    ReduxTodoComponent
  ]
})
export class ReduxTodoModule { }
