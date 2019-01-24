import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav">
      <a
        *ngFor="let page of pages"
        class="nav-link"
        [routerLink]="page.link"
        routerLinkActive="nav-link--active">
        {{ page.label }}
      </a>
    </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  pages = [
    { link: '/rxjs', label: 'RxJS' },
    { link: '/redux', label: 'Redux' }
  ];
}
