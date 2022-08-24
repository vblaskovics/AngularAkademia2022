import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { OrderPipe } from './order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { CustomPipe } from './custom.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    OrderPipe,
    CounterPipe,
    CustomPipe,
    PipeCustomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
