import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss']
})
export class ProductsModalComponent implements OnInit {

  @Output() submitClicked = new EventEmitter<any>();

  categories: Category[] = []

  product: Product = {
    name: '',
    description: '',
    categoryId: 0
  }

  constructor(
    public dialogRef: MatDialogRef<ProductsModalComponent>,
    private service: CategoryService
  ) {

  }

  ngOnInit(): void {
    this.service.getAllCategories()
      .subscribe(categories => {
        this.categories = categories
      })
  }
  
  saveMessage() {
    this.submitClicked.emit(this.product);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
