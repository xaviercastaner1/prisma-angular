import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts()
      .subscribe(res => {
        console.log(res)
      })
  }

}
