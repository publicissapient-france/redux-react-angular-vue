import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TodosEffects } from './effects/todo.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument({ name: 'Tout doux Store!' })
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class AppStoreModule { }
