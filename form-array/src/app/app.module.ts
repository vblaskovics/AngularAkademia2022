import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NewClassFormComponent } from './new-class-form/new-class-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    NewClassFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
