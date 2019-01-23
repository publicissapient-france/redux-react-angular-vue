import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav class="nav">
        <a class="nav-link" routerLink="/rxjs" routerLinkActive="nav-link--active">RxJS</a>
        <a class="nav-link" routerLink="/redux" routerLinkActive="nav-link--active">Redux</a>
      </nav>

      <h1 class="title">{{ title }}</h1>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tout doux!';
}
