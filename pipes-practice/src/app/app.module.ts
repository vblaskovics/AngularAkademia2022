import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MbToGbPipe } from './pipes/mb-to-gb.pipe';
import { ExtensionPipe } from './pipes/extension.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MbToGbPipe,
    ExtensionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
