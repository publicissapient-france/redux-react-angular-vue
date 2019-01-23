import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReduxTodoComponent } from './components/redux-todo/redux-todo.component';

@NgModule({
  declarations: [
    ReduxTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReduxTodoComponent }]),
    AppSharedModule
  ],
  exports: [
    ReduxTodoComponent
  ]
})
export class ReduxTodoModule { }
