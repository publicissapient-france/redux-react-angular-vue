import { UiTodoAddComponent } from 'App/components/ui/ui-todo-add/ui-todo-add.component';
import { UiTodoCategoryComponent } from 'App/components/ui/ui-todo-category/ui-todo-category.component';
import { UiTodoListComponent } from 'App/components/ui/ui-todo-list/ui-todo-list.component';
import { UiTodoStatusComponent } from 'App/components/ui/ui-todo-status/ui-todo-status.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppFontAwesomeModule } from './app-font-awesome.module';

const components = [
  UiTodoAddComponent,
  UiTodoCategoryComponent,
  UiTodoListComponent,
  UiTodoStatusComponent,
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
