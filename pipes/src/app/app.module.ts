import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    OrderPipe,
    CounterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
