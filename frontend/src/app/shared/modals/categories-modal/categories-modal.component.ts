import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.component.html',
  styleUrls: ['./categories-modal.component.scss']
})
export class CategoriesModalComponent implements OnInit {

  @ViewChild('myForm') myForm!: ElementRef

  @Output() submitClicked = new EventEmitter<any>();

  categories: Category[] = []

  category: Category = {
    name: ''
  }

  constructor(
    public dialogRef: MatDialogRef<CategoriesModalComponent>
  ) {

  }

  ngOnInit(): void {

  }

  saveMessage() {
    this.submitClicked.emit(this.category);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
