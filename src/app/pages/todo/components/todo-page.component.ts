import {Component, OnInit} from '@angular/core';

import {EditTodoModalService} from '../../../features/edit-todo-modal/services/edit-todo-modal.service';
import {TodoDataService} from '../data/services/todo-data.service';
import {Todo} from '../models';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  providers: [EditTodoModalService],
})
export class TodoPageComponent implements OnInit {
  public todos$ = this.todoDataService.list$;
  public loading$ = this.todoDataService.loading$;
  public count$ = this.todoDataService.count$;

  constructor(
    private todoDataService: TodoDataService,
    private editTodoModalService: EditTodoModalService,
  ) {
  }

  ngOnInit(): void {
    this.todoDataService.load();
  }

  public onTodoChange(todo: Todo): void {
    this.todoDataService.update(todo);
  }

  public onTodoDelete(todo: Todo): void {
    this.todoDataService.delete(todo);
  }

  public onTodoEditClick(todo: Todo): void {
    this.editTodoModalService.open(todo);
  }

  public onTodoAdd(todo: Todo): void {
    this.todoDataService.create(todo);
  }
}
