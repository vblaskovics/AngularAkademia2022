import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileNamePipe } from './pipes/file-name.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ElapsedSecondsPipe } from './pipes/elapsed-seconds.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    OrderPipe,
    CounterPipe,
    FileManagerComponent,
    FileNamePipe,
    FileSizePipe,
    ElapsedSecondsPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
