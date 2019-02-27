import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppIconsModule } from './app-icons.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { components } from './components';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppIconsModule,

    AppStoreModule // <-- Redux Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
