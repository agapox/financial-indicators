import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { IndicatorItemModule } from './components/indicator-item/indicator-item.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    IndicatorItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
