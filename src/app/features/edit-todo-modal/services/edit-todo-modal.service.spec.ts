import { TestBed } from '@angular/core/testing';

import { EditTodoModalService } from './edit-todo-modal.service';

describe('EditTodoModalService', () => {
  let service: EditTodoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTodoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
