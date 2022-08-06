import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalModule} from 'ngx-bootstrap/modal';

import {EditTodoModalComponent} from './edit-todo-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    EditTodoModalComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class EditTodoModalModule {
}
