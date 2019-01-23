import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './shared/app-shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
    AppSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
