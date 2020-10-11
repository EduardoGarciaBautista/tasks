import { Pipe, PipeTransform } from '@angular/core';
import {TodoModel} from './models/todo.model';
import {validFilters} from '../filter/filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: TodoModel[], filter: validFilters): TodoModel[] {
    switch (filter) {
      case 'completed':
        return value.filter(todo => todo.completed);
      case 'pending':
        return value.filter(todo => !todo.completed);
      case 'todos':
        return value;
    }
  }

}
