import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CategoriesModalComponent } from './categories-modal/categories-modal.component';

@NgModule({
  declarations: [
    ProductsModalComponent,
    CategoriesModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ModalsModule { }
