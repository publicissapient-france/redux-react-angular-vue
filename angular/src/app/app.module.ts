import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboardList, faPlus, faToggleOff, faToggleOn, faTrash } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { components } from './components';
import { AppStoreModule } from './store/app-store.module';

library.add(faClipboardList, faPlus, faToggleOff, faToggleOn, faTrash);

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,

    AppStoreModule // <-- Redux Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
