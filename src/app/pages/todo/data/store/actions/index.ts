import {HttpErrorResponse} from "@angular/common/http";

import {createAction, props} from "@ngrx/store";

import {Todo} from "../../../models";

export const create = createAction(
  '[TODO PAGE] Create',
  props<{todo: Todo}>(),
);
export const createSuccess = createAction(
  '[TODO PAGE] Create Success',
  props<{todo: Todo}>(),
);
export const createFailed = createAction(
  '[TODO PAGE] Create Failed',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const load = createAction(
  '[TODO PAGE] Load All',
);
export const loadSuccess = createAction(
  '[TODO PAGE] Load All Success',
  props<{todos: Todo[]}>(),
);
export const loadFailed = createAction(
  '[TODO PAGE] Load All Failed',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const loadOne = createAction(
  '[TODO PAGE] Load One',
  props<{id: string}>(),
);
export const loadOneSuccess = createAction(
  '[TODO PAGE] Load One Success',
  props<{todo: Todo}>(),
);
export const loadOneFailed = createAction(
  '[TODO PAGE] Load One Failed',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const update = createAction(
  '[TODO PAGE] Update',
  props<{todo: Todo}>(),
);
export const updateSuccess = createAction(
  '[TODO PAGE] Update Success',
  props<{todo: Todo}>(),
);
export const updateFailed = createAction(
  '[TODO PAGE] Update Failed',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);

export const deleteById = createAction(
  '[TODO PAGE] Delete',
  props<{todo: Todo}>(),
);
export const deleteByIdSuccess = createAction(
  '[TODO PAGE] Delete Success',
  props<{todo: Todo}>(),
);
export const deleteByIdFailed = createAction(
  '[TODO PAGE] Delete Failed',
  props<{httpErrorResponse: HttpErrorResponse}>(),
);
