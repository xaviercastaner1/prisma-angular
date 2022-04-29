import { Pipe, PipeTransform } from '@angular/core';
import { Injector } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../../interfaces/category';
import { CategoryService } from '../services/category.service';

export let AppInjector: Injector;

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  constructor(private service: CategoryService) {}

  category!: Category

  transform(id: number, ...args: any[]): Observable<string> {
    return this.service.getCategory(id)
      .pipe(
        map((category: Category) => {
          return category.name
        })
      )
  }

}
