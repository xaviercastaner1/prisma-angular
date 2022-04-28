import { Pipe, PipeTransform } from '@angular/core';
import { Injector } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';

export let AppInjector: Injector;

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  private service = AppInjector.get(CategoryService)

  transform(id: number, ...args: unknown[]) {
    this.service.getCategory(id)
      .subscribe(category => {
        return category.name;
      })
  }

}
