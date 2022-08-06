import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable()
export class EditTodoFormService {
  constructor(
    private fb: FormBuilder,
  ) {
  }

  public initForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control(''),
      status: this.fb.control(false),
      notes: this.fb.control(''),
    });
  }
}
