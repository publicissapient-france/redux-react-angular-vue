import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsTodoComponent } from './components/rxjs/rxjs-todo/rxjs-todo.component';

const routes: Routes = [
  { path: 'todo', component: RxjsTodoComponent },
  { path: '**', redirectTo: 'todo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
