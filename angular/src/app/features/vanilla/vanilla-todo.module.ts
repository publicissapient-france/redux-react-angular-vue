import { AppSharedModule } from 'App/shared/app-shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VanillaTodoComponent } from './components/vanilla-todo/vanilla-todo.component';

@NgModule({
  declarations: [
    VanillaTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: VanillaTodoComponent }]),
    AppSharedModule
  ],
  exports: [
    VanillaTodoComponent
  ]
})
export class VanillaTodoModule { }
