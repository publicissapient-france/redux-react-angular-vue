# Angular in a nutshell

- Decorators
- Module
- Component
  - String interpolation
  - Property binding and Event binding
  - Parent-Child communication
- Providers

## Decorators

```ts
import { NgModule, Component } from '@angular/core';

@NgModule({ /* configuration metadata */ })
export class AppModule { }

@Component({ /* configuration metadata */ })
export class AppComponent { }
```

## Module

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

## Component (part 1)

String interpolation

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>`,
})
export class AppComponent {
  title = 'Hello world!';
}
```

## Component (part 2)

Property binding and Event binding

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

## Component (part 3)

Parent-Child communication

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Parent
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

// Child
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

## Providers

Dependency injection

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
