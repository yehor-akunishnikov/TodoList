import {Injectable} from '@angular/core';

import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

import {EditTodoModalComponent} from '../edit-todo-modal.component';
import {Todo} from '../../../pages/todo/models';

@Injectable()
export class EditTodoModalService {
  private bsModalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) {
  }

  public open(todo: Todo): void {
    const initialState: ModalOptions = {
      initialState: {
        todo,
      },
    };
    this.bsModalRef = this.modalService.show(EditTodoModalComponent, initialState);
    this.bsModalRef.setClass('modal-dialog-centered');
  }

  public hide(): void {
    this.modalService.hide();
  }
}
