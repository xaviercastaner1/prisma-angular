import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { CategoriesModalComponent } from '../categories-modal/categories-modal.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  category!: Category

  @Output() refreshCategories = new EventEmitter<any>()

  constructor(
    private service: CategoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  editCategory() {
    const dialogRef = this.dialog.open(CategoriesModalComponent, {
      data: this.category
    });
    dialogRef.componentInstance.submitClicked.subscribe(category => {
      console.log('Edited Category', category);

      // do something here with the data
      this.service.putCategory(category)
        .subscribe(res => {
          console.log('res', res)
        })
    });
  }

  deleteCategory() {
    this.service.deleteCategory(this.category.id!)
      .subscribe(res => {
        console.log('res', res)
        this.refreshCategories.emit()
      })
  }

}
