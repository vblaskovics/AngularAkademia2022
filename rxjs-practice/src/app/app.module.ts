import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mysolution2Module } from './mysolution2/mysolution2.module';
import { Solution1Module } from './solution1/solution1.module';
import { Solution2Module } from './solution2/solution2.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    Solution1Module,
    Solution2Module,
    Mysolution2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
