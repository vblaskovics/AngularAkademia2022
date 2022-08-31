import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { FileExplorerPipe } from './pipes/file-explorer.pipe';
import { FileExplorer2Pipe } from './pipes/file-explorer2.pipe';
import { FileExplorer3Pipe } from './pipes/file-explorer3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    OrderPipe,
    CounterPipe,
    FileExplorerPipe,
    FileExplorer2Pipe,
    FileExplorer3Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
