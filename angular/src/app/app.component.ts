import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="title">{{ title }}</h1>

      <div class="navbar">
        <nav class="nav">
          <a class="nav-link" [class.nav-link--active]="vanilla" (click)="vanilla = true">Vanilla</a>
          <a class="nav-link" [class.nav-link--active]="!vanilla" (click)="vanilla = false">Redux</a>
        </nav>
      </div>

      <app-vanilla-todo *ngIf="vanilla"></app-vanilla-todo>
      <app-redux-todo *ngIf="!vanilla"></app-redux-todo>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tout doux!';

  // Just to simplify the code, there's Routing in this live coding.
  // We are just using this boolean member to switch between "pages"...
  vanilla = true;
}
