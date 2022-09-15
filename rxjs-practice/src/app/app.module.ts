import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Solution1Module } from './solution1/solution1.module';
import { Solution2Module } from './solution2/solution2.module';
import { Solution2myModule } from './solution2my/solution2my.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Solution1Module,
    Solution2Module,
    Solution2myModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
