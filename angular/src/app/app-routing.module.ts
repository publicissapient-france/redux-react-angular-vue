import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsTodoListComponent } from './components/rxjs/rxjs-todo-list/rxjs-todo-list.component';

const routes: Routes = [
  { path: 'list', component: RxjsTodoListComponent },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
