import { TestBed } from '@angular/core/testing';

import { EditTodoFormService } from './edit-todo-form.service';

describe('EditTodoFormService', () => {
  let service: EditTodoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTodoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
