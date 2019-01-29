import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RxjsTodoAddComponent } from './components/rxjs-todo-add/rxjs-todo-add.component';
import { RxjsTodoListComponent } from './components/rxjs-todo-list/rxjs-todo-list.component';
import { RxjsTodoMessageComponent } from './components/rxjs-todo-message/rxjs-todo-message.component';
import { RxjsTodoStatusComponent } from './components/rxjs-todo-status/rxjs-todo-status.component';
import { RxjsTodoSwitchComponent } from './components/rxjs-todo-switch/rxjs-todo-switch.component';
import { RxjsTodoComponent } from './components/rxjs-todo/rxjs-todo.component';
import { RxjsTodoService } from './services/rxjs-todo.service';

@NgModule({
  declarations: [
    RxjsTodoComponent,
    RxjsTodoAddComponent,
    RxjsTodoMessageComponent,
    RxjsTodoListComponent,
    RxjsTodoStatusComponent,
    RxjsTodoSwitchComponent
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
