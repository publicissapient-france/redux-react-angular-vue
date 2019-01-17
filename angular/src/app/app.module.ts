import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsTodoAddComponent } from './components/rxjs/rxjs-todo-add/rxjs-todo-add.component';
import { RxjsTodoListComponent } from './components/rxjs/rxjs-todo-list/rxjs-todo-list.component';
import { UiTodoAddComponent } from './components/ui/ui-todo-add/ui-todo-add.component';
import { UiTodoListComponent } from './components/ui/ui-todo-list/ui-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UiTodoAddComponent,
    RxjsTodoAddComponent,
    RxjsTodoListComponent,
    UiTodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
