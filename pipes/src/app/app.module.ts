import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { FileTableComponent } from './file-table/file-table.component';
import { FilenameConverterPipe } from './pipes/filename-converter.pipe';
import { DateConverterPipe } from './pipes/date-converter.pipe';
import { FilesizeConverterPipe } from './pipes/filesize-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    PipeCustomComponent,
    OrderPipe,
    CounterPipe,
    FileTableComponent,
    FilenameConverterPipe,
    DateConverterPipe,
    FilesizeConverterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
