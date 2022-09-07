import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
<<<<<<< HEAD
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { FilesComponent } from './files/files.component';
import { ExtensionPipe } from './pipes/extension.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ElapsedSecondsPipe } from './pipes/elapsed-seconds.pipe';
=======
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { RemoveExtensionPipe } from './pipes/remove-extension.pipe';
import { Hello2Pipe } from './pipes/hello2.pipe';
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
<<<<<<< HEAD
    PipeCustomComponent,
    OrderPipe,
    CounterPipe,
    FilesComponent,
    ExtensionPipe,
    FileSizePipe,
    ElapsedSecondsPipe
=======
    OrderPipe,
    CounterPipe,
    RemoveExtensionPipe,
    Hello2Pipe
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
