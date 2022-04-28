import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsModalComponent } from 'src/app/shared/modals/products-modal/products-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  displayedColumns = ['id', 'name', 'description', 'category', 'actions']

  constructor(
    private service: ProductService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.getAllProducts()
      .subscribe((products: Product[]) => {
        console.log('products', products)
        this.products = products
      })
  }

  getAll() {
    this.service.getAllProducts()
      .subscribe((products: Product[]) => {
        console.log('products', products)
        this.products = products
      })
  }

  addProduct() {
    const dialogRef = this.dialog.open(ProductsModalComponent);
    dialogRef.componentInstance.submitClicked.subscribe(product => {
      console.log('New Product', product);

      // do something here with the data
      this.service.postProduct(product)
        .subscribe(res => {
          console.log('res', res)
          this.getAll()
        })
    });
  }

  deleteProduct(product: Product) {
    this.service.deleteProduct(product.id!)
      .subscribe(result => {
        console.log(result)

        this.getAll()
      })
    
  }


}
