import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

=======
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
import { AppComponent } from './app.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormValidation2Component } from './form-validation2/form-validation2.component';
import { FormCustomValidationComponent } from './form-custom-validation/form-custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    FormValidationComponent,
    FormValidation2Component,
<<<<<<< HEAD
    FormCustomValidationComponent,
=======
    FormCustomValidationComponent
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
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
