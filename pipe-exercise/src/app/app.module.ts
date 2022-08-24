import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
