import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempcComponent } from './tempc/tempc.component';
import { Temp2Component } from './temp2/temp2.component';

@NgModule({
  declarations: [
    TempcComponent,
    Temp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
