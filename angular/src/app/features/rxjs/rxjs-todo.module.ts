import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RxjsTodoAddComponent } from './components/rxjs-todo-add/rxjs-todo-add.component';
import { RxjsTodoListComponent } from './components/rxjs-todo-list/rxjs-todo-list.component';
import { RxjsTodoStatusComponent } from './components/rxjs-todo-status/rxjs-todo-status.component';
import { RxjsTodoComponent } from './components/rxjs-todo/rxjs-todo.component';
import { RxjsTodoService } from './services/rxjs-todo.service';

@NgModule({
  declarations: [
    RxjsTodoAddComponent,
    RxjsTodoListComponent,
    RxjsTodoStatusComponent,
    RxjsTodoComponent
  ],
  providers: [
    RxjsTodoService
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
