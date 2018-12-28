import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatTableModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
     MatFormFieldModule,
     MatCardModule,
     MatButtonModule, MatTableModule
  ],
  exports: [
    MatInputModule,
      MatFormFieldModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule
  ]
})
export class MaterialdesignModule { }
