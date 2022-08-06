import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

import {LoadingState, Todo} from "../../models";
import {PageChangedEvent} from "ngx-bootstrap/pagination";
import {TabDirective} from "ngx-bootstrap/tabs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnChanges {
  @Input() todos: Todo[] = [];
  @Input() loading: LoadingState | null = {
    loadInProgress: true,
    createInProgress: false,
    updateInProgress: false,
    deleteInProgress: false,
  };
  @Input() count: number | null = 0;

  @Output() todoChange = new EventEmitter<Todo>();
  @Output() todoDelete = new EventEmitter<Todo>();
  @Output() todoEditClick = new EventEmitter<Todo>();
  @Output() todoAdd = new EventEmitter<Todo>();

  public isAnyLoadingInProgress = false;
  public currentPage = 1;
  public currentTab = 'All';
  public tabs = ['All', 'Done', 'Active'];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['loading'] && this.loading) {
      this.isAnyLoadingInProgress = Object.values(this.loading).includes(true);
    }
  }

  public onCheckboxClick(todo: Todo): void {
    this.todoChange.emit({...todo, status: !todo.status});
  }

  public onDeleteClick(todo: Todo): void {
    this.todoDelete.emit(todo);
  }

  public onEditClick(todo: Todo): void {
    this.todoEditClick.emit(todo);
  }

  public onAddClick(name: string): void {
    this.todoAdd.emit({
      status: false, name, notes: '',
      creationDate: new Date(),
    } as Todo);
  }

  public onSelectTab(e: TabDirective) {
    if (e.heading) {
      this.currentTab = e.heading;
    }
  }
}
