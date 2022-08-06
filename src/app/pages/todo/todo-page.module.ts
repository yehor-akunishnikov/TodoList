import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoPageComponent} from './components/todo-page.component';
import {TodosListComponent} from './components/todo-list/todos-list.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoDataModule} from './data/todo-data.module';
import {SharedModule} from '../../shared/shared.module';
import {EditTodoModalModule} from '../../features/edit-todo-modal/edit-todo-modal.module';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import {FormsModule} from "@angular/forms";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { TodoPaginationPipe } from './pipes/todo-pagination.pipe';
import {TabsModule} from "ngx-bootstrap/tabs";

@NgModule({
  declarations: [
    TodoPageComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoInputComponent,
    TodoPaginationPipe,
  ],
  exports: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    TodoDataModule,
    SharedModule,
    EditTodoModalModule,
    FormsModule,
    PaginationModule,
    TabsModule,
  ]
})
export class TodoPageModule {
}
