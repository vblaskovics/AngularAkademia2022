import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipePageComponent } from './pipe-page/pipe-page.component';
import { HelloPipe } from './pipes/hello.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { CounterPipe } from './pipes/counter.pipe';
import { PipeTableComponent } from './pipe-table/pipe-table.component';
import { SplitNamePipe } from './pipes/split-name.pipe';
import { SplitExtensionPipe } from './pipes/split-extension.pipe';
import { ConvertMbPipe } from './pipes/convert-mb.pipe';
import { DatePipe } from './pipes/date.pipe';
import { ConvertGbPipe } from './pipes/convert-gb.pipe';
import { LastModifPipe } from './pipes/last-modif.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePageComponent,
    HelloPipe,
    OrderPipe,
    CounterPipe,
    PipeTableComponent,
    SplitNamePipe,
    SplitExtensionPipe,
    ConvertMbPipe,
    DatePipe,
    ConvertGbPipe,
    LastModifPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
