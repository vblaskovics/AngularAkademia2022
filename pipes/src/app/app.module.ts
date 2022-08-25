import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { PipeTableComponent } from './pipe-table/pipe-table.component';
import { SplitPipe } from './pipes/split.pipe';
import { SizePipe } from './pipes/size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    PipeCustomComponent,
    OrderPipe,
    CounterPipe,
    PipeTableComponent,
    SplitPipe,
    SizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
