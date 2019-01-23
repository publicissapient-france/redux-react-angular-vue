import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RxjsTodoAddComponent } from './rxjs-todo-add/rxjs-todo-add.component';
import { RxjsTodoListComponent } from './rxjs-todo-list/rxjs-todo-list.component';
import { RxjsTodoStatusComponent } from './rxjs-todo-status/rxjs-todo-status.component';
import { RxjsTodoComponent } from './rxjs-todo/rxjs-todo.component';

@NgModule({
  declarations: [
    RxjsTodoAddComponent,
    RxjsTodoListComponent,
    RxjsTodoStatusComponent,
    RxjsTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RxjsTodoComponent }]),
    AppSharedModule
  ],
  exports: [
    RxjsTodoComponent
  ]
})
export class RxjsTodoModule { }
