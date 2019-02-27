import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="title">{{ title }}</h1>

      <app-vanilla-todo></app-vanilla-todo>
      <!--<app-redux-todo></app-redux-todo>-->
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tout doux!';
}
