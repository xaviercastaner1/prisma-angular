import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ModalsModule } from '../shared/modals/modals.module';
import { CategoryComponent } from './category/category.component';
@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ModalsModule
  ]
})
export class CategoriesModule { }
