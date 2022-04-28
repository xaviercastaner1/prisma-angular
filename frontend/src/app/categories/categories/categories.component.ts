import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesModalComponent } from 'src/app/shared/modals/categories-modal/categories-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = []

  constructor(
    private service: CategoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.service.getAllCategories()
      .subscribe((categories: Category[]) => {
        console.log('categories', categories)
        this.categories = categories
      })
  }

  addCategory() {
    const dialogRef = this.dialog.open(CategoriesModalComponent);
    dialogRef.componentInstance.submitClicked.subscribe(category => {
      console.log('New Category', category);

      // do something here with the data
      this.service.postCategory(category)
        .subscribe(res => {
          console.log('res', res)
          this.service.getAllCategories()
            .subscribe((categories: Category[]) => {
              console.log('categories', categories)
              this.categories = categories
            })
        })
    });
  }


}
