import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MaterialModule } from '../material/material.module';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CustomButtonComponent, CustomInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomButtonComponent,
    CustomInputComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
