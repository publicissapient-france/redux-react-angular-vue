# Angular in a nutshell

__Au Sommaire:__

- Decorators
- Module
- Component
  - String interpolation
  - Property binding and Event binding
  - Parent-Child communication
- Providers and Dependency injection
- Life cycle hooks
- RxJS

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

## Providers and Dependency injection

```ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  template: `...`
})
export class ListComponent {
  constructor(private httpClient: HttpClient) { } // <- Dependency injection
}
```

## Life cycle hooks

```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let item of list">{{ item }}</li>
    </ul>
  `
})
export class ListComponent implements OnInit {
  list: string[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() { // <- Life cycle hooks
    this.httpClient.get<string[]>('http://todo.com/list').subscribe(
      list => this.list = list
    );
  }
}
```

## RxJS

```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  template: `
    <ul *ngIf="list$ | async; let list">
      <li *ngFor="let item of list">{{ item }}</li>
    </ul>
  `
})
export class ListComponent implements OnInit {
  list$: Observable<string[]>; // <- RxJS

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.list$ = this.httpClient.get<string[]>('http://todo.com/list');
  }
}
```
