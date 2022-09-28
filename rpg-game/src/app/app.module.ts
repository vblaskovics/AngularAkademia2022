import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { CharacterSelectComponent } from './components/character-select/character-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAreaComponent,
    CharacterSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
