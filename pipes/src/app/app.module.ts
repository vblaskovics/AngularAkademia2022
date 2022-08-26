import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { PipesPagesComponent } from './pipes-pages/pipes-pages.component';
import { HelloPipePipe } from './pipes/hello-pipe.pipe';
import { OrderPipePipe } from './pipes/order-pipe.pipe';
import { CounterPipePipe } from './pipes/counter-pipe.pipe';
import { PipeTableComponent } from './pipe-table/pipe-table.component';
import { SizePipe } from './pipes/size.pipe';
import { ElapsedtimePipe } from './pipes/elapsedtime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesPagesComponent,
    PipeCustomComponent,
    HelloPipePipe,
    OrderPipePipe,
    CounterPipePipe,
    PipeTableComponent,
    SizePipe,
    ElapsedtimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
