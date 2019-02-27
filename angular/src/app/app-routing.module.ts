import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReduxTodoComponent } from './components/redux-todo/redux-todo.component';
import { VanillaTodoComponent } from './components/vanilla-todo/vanilla-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'vanilla', pathMatch: 'full' },
  { path: 'vanilla', component: VanillaTodoComponent },
  { path: 'redux', component: ReduxTodoComponent },
  { path: '**', redirectTo: 'vanilla' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
