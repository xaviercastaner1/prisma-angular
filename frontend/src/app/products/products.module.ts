import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModalsModule } from '../shared/modals/modals.module';
import { ProductComponent } from './product/product.component';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../pipes/category.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ModalsModule,
    MatTableModule
  ]
})
export class ProductsModule { }
