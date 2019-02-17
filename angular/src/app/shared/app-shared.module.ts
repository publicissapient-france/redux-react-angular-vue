import { UiTodoAddComponent } from 'App/components/ui/ui-todo-add/ui-todo-add.component';
import { UiTodoListComponent } from 'App/components/ui/ui-todo-list/ui-todo-list.component';
import { UiTodoStatusComponent } from 'App/components/ui/ui-todo-status/ui-todo-status.component';
import { UiTodoSwitchComponent } from 'App/components/ui/ui-todo-switch/ui-todo-switch.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppFontAwesomeModule } from './app-font-awesome.module';

const components = [
  UiTodoAddComponent,
  UiTodoListComponent,
  UiTodoStatusComponent,
  UiTodoSwitchComponent,
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    AppFontAwesomeModule,
  ],
  exports: [
    components,
    AppFontAwesomeModule
  ]
})
export class AppSharedModule { }
