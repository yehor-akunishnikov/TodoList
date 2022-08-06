import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {LoadingState, Todo} from "../../models";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  @Input() todos: Todo[] = [];
  @Input() loading: LoadingState | null = {
    loadInProgress: true,
    createInProgress: false,
    updateInProgress: false,
    deleteInProgress: false,
  };

  @Output() todoChange = new EventEmitter<Todo>();
  @Output() todoDelete = new EventEmitter<Todo>();

  public get isSomeLoadingInProgress() {
    if (this.loading) {
      return Object.values(this.loading).includes(true);
    } else {
      return true;
    }
  }

  public onCheckboxClick(todo: Todo): void {
    this.todoChange.emit({...todo, status: !todo.status});
  }

  public onDeleteClick(todo: Todo): void {
    this.todoDelete.emit(todo);
  }
}
