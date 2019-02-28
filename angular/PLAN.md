# Plan

- Partir du server qui retoune déjà avec une liste

- Define State `list` property
- Define selector getTodos
- `Load` et `LoadSuccess` actions
- redux-todo: dispatch load
- load effect
- loadSuccess reducer
- update
- updateSuccess
- category

## Angular in a nutshell

### Decorators

```ts
import { NgModule, Component } from '@angular/core';

@NgModule({ /* configuration metadata */ })
export class AppModule { }

@Component({ /* configuration metadata */ })
export class AppComponent { }
```

### Module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ] // <- App root component
})
export class AppModule { }
```

### Component: String interpolation

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>`,
  styles: [ 'h1 { color:red; }' ]
})
export class AppComponent {
  title = 'Hello world!';
}
```

### Component: Property binding and Event binding

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-field',
  template: `
    <input [value]="fieldValue" (change)="fieldHandler($event)">
    <p>{{ fieldValue }}<p>
  `
})
export class FieldComponent {
  fieldValue = 'Stéphane';

  fieldHandler(value: string) {
    this.fieldValue = value;
  }
}
```

### Component: Parent-Child communication

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-ui-field [(fieldValue)]="text"></app-ui-field>
    <p>{{ text }}</p>
  `
})
export class LayoutComponent {
  text: string;
}

@Component({
  selector: 'app-ui-field',
  template: `<input [value]="fieldValue" (input)="fieldHandler($event)">`
})
export class FieldComponent {
  @Input() fieldValue = '';
  @Output() fieldValueChange = new EventEmitter<string>();

  fieldHandler(value: string) {
    this.fieldValueChange.emit(value);
  }
}
```

## Providers: dependency injection

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'App/domains';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private httpClient: HttpClient) { } // <- Dependency injection

  getTodos() {
    return this.httpClient.get<Todo[]>('http://tasks.com/todos');
  }
}
```

## Les IMPORTS

```ts
import { AppState } from 'App/store/reducers';
import { Store } from '@ngrx/store';

constructor(private store: Store<AppState>) { }

///////////////////////////////////////////////////////////////

import * as todosActions from 'App/store/actions/todo.actions';

///////////////////////////////////////////////////////////////

import { RestService } from 'App/services/rest.service';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as todosActions from '../actions/todo.actions';

@Effect() load$ = this.actions$.pipe(
  ofType<todosActions.Load>(todosActions.ActionTypes.Load),
  switchMap(() => this.restService.getTodos()),
  map(todos => new todosActions.LoadSuccess(todos))
);
```
