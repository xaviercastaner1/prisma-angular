import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { MatTableModule } from '@angular/material/table';
import { CategoryPipe } from '../shared/pipes/category.pipe';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductComponent,
    CategoryPipe,
    ProductsModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ProductsModule { }
