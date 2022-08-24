import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { FilesComponent } from './files/files.component';
import { ExtensionPipe } from './pipes/extension.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ElapsedSecondsPipe } from './pipes/elapsed-seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    PipeCustomComponent,
    OrderPipe,
    CounterPipe,
    FilesComponent,
    ExtensionPipe,
    FileSizePipe,
    ElapsedSecondsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
