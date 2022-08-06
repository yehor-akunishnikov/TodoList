import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoPageComponent} from './components/todo-page.component';
import {TodosListComponent} from './components/todo-list/todos-list.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoDataModule} from './data/todo-data.module';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodosListComponent,
    TodoItemComponent,
  ],
  exports: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    TodoDataModule,
  ]
})
export class TodoPageModule {
}
