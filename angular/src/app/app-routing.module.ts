import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosListComponent } from './components/todos-list/todos-list.component';

const routes: Routes = [
  { path: 'list', component: TodosListComponent },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
