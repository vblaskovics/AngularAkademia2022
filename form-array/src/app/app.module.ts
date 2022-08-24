import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewClassFormComponent } from './new-class-form/new-class-form.component';
@NgModule({
  declarations: [AppComponent, FormComponent, NewClassFormComponent],
  imports: [FormsModule, ReactiveFormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
