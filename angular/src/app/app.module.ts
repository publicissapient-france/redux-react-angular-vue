import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsTodoAddComponent } from './components/rxjs/rxjs-todo-add/rxjs-todo-add.component';
import { RxjsTodoListComponent } from './components/rxjs/rxjs-todo-list/rxjs-todo-list.component';
import { RxjsTodoStatusComponent } from './components/rxjs/rxjs-todo-status/rxjs-todo-status.component';
import { RxjsTodoSwitchComponent } from './components/rxjs/rxjs-todo-switch/rxjs-todo-switch.component';
import { RxjsTodoComponent } from './components/rxjs/rxjs-todo/rxjs-todo.component';
import { UiTodoAddComponent } from './components/ui/ui-todo-add/ui-todo-add.component';
import { UiTodoListComponent } from './components/ui/ui-todo-list/ui-todo-list.component';
import { UiTodoStatusComponent } from './components/ui/ui-todo-status/ui-todo-status.component';
import { UiTodoSwitchComponent } from './components/ui/ui-todo-switch/ui-todo-switch.component';
import { ContentEditableDirective } from './directives/content-editable.directive';
import { AppFontAwesomeModule } from './shared/app-font-awesome.module';

@NgModule({
  declarations: [
    AppComponent,
    UiTodoAddComponent,
    UiTodoListComponent,
    UiTodoStatusComponent,
    UiTodoSwitchComponent,
    RxjsTodoComponent,
    RxjsTodoAddComponent,
    RxjsTodoListComponent,
    RxjsTodoStatusComponent,
    RxjsTodoSwitchComponent,
    ContentEditableDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
