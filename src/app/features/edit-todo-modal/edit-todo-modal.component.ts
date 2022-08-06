import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {map, Subscription} from 'rxjs';

import {BsModalRef} from 'ngx-bootstrap/modal';

import {TodoActionsService} from '../../pages/todo/data/services/todo-actions.service';
import {TodoDataService} from '../../pages/todo/data/services/todo-data.service';
import {EditTodoFormService} from './services/edit-todo-form.service';
import {Todo} from '../../pages/todo/models';

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.component.html',
  styleUrls: ['./edit-todo-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EditTodoFormService]
})
export class EditTodoModalComponent implements OnInit, OnDestroy {
  // @ts-ignore
  todo: Todo;

  private subscriptions = new Subscription();
  public form = this.formService.initForm();
  public loading$ = this.todoDataService.loading$.pipe(
    map(loadingState => loadingState.updateInProgress || loadingState.deleteInProgress),
  );

  constructor(
    private modalRef: BsModalRef,
    private formService: EditTodoFormService,
    private todoDataService: TodoDataService,
    private todoActionsService: TodoActionsService,
  ) {}

  public ngOnInit(): void {
    this.form.patchValue(this.todo);

    this.subscriptions.add(
      this.todoActionsService.updateSuccess$.subscribe(() => {
        this.form.enable();
        this.modalRef.hide();
      }),
    );
    this.subscriptions.add(
      this.todoActionsService.updateFailed$.subscribe(() => {
        this.form.enable();
        alert('Request error, try again');
      }),
    );
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public hide(): void {
    this.modalRef.hide();
  }

  public onSubmit(event: Event, form: FormGroup, todo: Todo): void {
    event.preventDefault();
    event.stopPropagation();

    if (form.dirty) {
      this.todoDataService.update({
        ...todo,
        name: form.value.name,
        status: form.value.status,
        notes: form.value.notes,
      });
      this.form.disable();
    }
  }
}
