import { Pipe, PipeTransform } from '@angular/core';

import {Todo} from "../models";

@Pipe({
  name: 'todoPagination'
})
export class TodoPaginationPipe implements PipeTransform {
  transform(todos: Todo[], page: number, tab: string): Todo[] {
    page = page - 1;

    if (tab === 'All') {
      return todos.slice(page * 3, page * 3 + 3);
    } else if (tab === 'Done') {
      return todos
        .filter(page => page.status)
        .slice(page * 3, page * 3 + 3);
    }

    return todos;
  }
}
