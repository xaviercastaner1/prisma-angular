import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>(`http://localhost:3000/products`)
  }

  postProduct(product: Product) {
    return this.httpClient.post(`http://localhost:3000/product`, product)
  }

  putProduct(product: Product) {
    return this.httpClient.put(`http://localhost:3000/product/${product.id}`, product)
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`http://localhost:3000/product/${id}`)
  }
}
