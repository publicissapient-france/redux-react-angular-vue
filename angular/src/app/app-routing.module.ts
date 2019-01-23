import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
  { path: 'rxjs', loadChildren: './features/rxjs/rxjs-todo.module#RxjsTodoModule' },
  { path: 'redux', loadChildren: './features/redux/redux-todo.module#ReduxTodoModule' },
  { path: '**', redirectTo: 'rxjs' }
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
