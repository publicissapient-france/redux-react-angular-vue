import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faClipboardList, faPlus, faSmileBeam, faToggleOff, faToggleOn,
    faTrash
} from '@fortawesome/free-solid-svg-icons';

library.add(faClipboardList, faPlus, faSmileBeam, faToggleOff, faToggleOn, faTrash);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class AppIconsModule { }
