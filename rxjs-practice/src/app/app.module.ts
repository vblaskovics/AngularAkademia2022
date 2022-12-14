import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Solution1Module } from './solution1/solution1.module';
import { Solution2Module } from './solution2/solution2.module';
import { Solution3Module } from './solution3/solution3.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Solution1Module,
    Solution2Module,
    Solution3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
