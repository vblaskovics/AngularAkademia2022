import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonToggleModule,
    MatCardModule,
    // MatTableModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonToggleModule,
    MatCardModule,
    // MatTableModule,
  ],
})
export class MaterialModule {}
