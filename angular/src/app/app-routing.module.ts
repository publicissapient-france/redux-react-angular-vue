import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'redux', pathMatch: 'full' },
  { path: 'redux', loadChildren: './features/redux/redux-todo.module#ReduxTodoModule' },
  { path: 'vanilla', loadChildren: './features/vanilla/vanilla-todo.module#VanillaTodoModule' },
  { path: '**', redirectTo: 'redux' }
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
