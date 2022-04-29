import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories-modal',
  templateUrl: './categories-modal.component.html',
  styleUrls: ['./categories-modal.component.scss']
})
export class CategoriesModalComponent implements OnInit {

  title: string = 'Afegir Categoria'

  @Output() submitClicked = new EventEmitter<any>();

  category: Category = {
    name: ''
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    public dialogRef: MatDialogRef<CategoriesModalComponent>
  ) {

  }

  ngOnInit(): void {
    if (this.data) {
      console.log('data', this.data)

      this.category = this.data
      this.title = 'Editar Categoria'
    }
  }

  saveMessage() {
    this.submitClicked.emit(this.category);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
