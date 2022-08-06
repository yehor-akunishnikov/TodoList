import { Pipe, PipeTransform } from '@angular/core';

import {Todo} from "../models";

@Pipe({
  name: 'todoPagination'
})
export class TodoPaginationPipe implements PipeTransform {
  transform(todos: Todo[], {page, tab}: {page?: number, tab: string}): Todo[] {
    if (page) {
      page = page - 1;

      if (tab === 'All') {
        return todos.slice(page * 3, page * 3 + 3);
      } else if (tab === 'Done') {
        return todos
          .filter(todo => todo.status)
          .slice(page * 3, page * 3 + 3);
      } else if (tab === 'Active') {
        return todos
          .filter(todo => !todo.status)
          .slice(page * 3, page * 3 + 3);
      }
    }

    if (tab === 'All') {
      return todos;
    } else if (tab === 'Done') {
      return todos.filter(todo => todo.status);
    } else if (tab === 'Active') {
      return todos.filter(todo => !todo.status);
    }

    return todos;
  }
}
