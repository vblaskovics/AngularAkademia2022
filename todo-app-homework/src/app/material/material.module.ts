import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatInputModule, MatCardModule],
})
export class MaterialModule {}
