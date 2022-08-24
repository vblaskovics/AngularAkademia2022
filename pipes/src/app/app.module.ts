import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { FileTableComponent } from './file-table/file-table.component';
import { FilePipe } from './pipes/file.pipe';
import { FileDotPipe } from './pipes/file-dot.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { FilegbPipe } from './pipes/filegb.pipe';
import { FilembPipe } from './pipes/filemb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    PipeCustomComponent,
    OrderPipe,
    CounterPipe,
    FileTableComponent,
    FilePipe,
    FileDotPipe,
    FileSizePipe,
    FilegbPipe,
    FilembPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
