import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories() {
    return this.httpClient.get<any>(`http://localhost:3000/categories`)
  }

  getCategory(id: number) {
    return this.httpClient.get<any>(`http://localhost:3000/category/id`)
  }

  postCategory(category: Category) {
    return this.httpClient.post(`http://localhost:3000/category`, category)
  }
}
