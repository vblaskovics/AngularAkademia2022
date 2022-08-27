import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MbToGbPipe } from './table/model/pipes/mb-to-gb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MbToGbPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
