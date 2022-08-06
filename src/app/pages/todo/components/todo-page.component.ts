import { Component, OnInit } from '@angular/core';

import {TodoDataService} from "../data/services/todo-data.service";
import {Todo} from "../models";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  public todos$ = this.todoDataService.list$;
  public loading$ = this.todoDataService.loading$;

  constructor(
    private todoDataService: TodoDataService,
  ) { }

  ngOnInit(): void {
    this.todoDataService.load();
  }

  public onTodoChange(todo: Todo): void {
    this.todoDataService.update(todo);
  }

  public onTodoDelete(todo: Todo): void {
    this.todoDataService.delete(todo);
  }
}
