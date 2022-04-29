import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesModalComponent } from './categories-modal/categories-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent,
    CategoriesModalComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ]
})
export class CategoriesModule { }
