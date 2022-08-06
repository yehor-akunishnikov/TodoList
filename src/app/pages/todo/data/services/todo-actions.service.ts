import {Injectable} from '@angular/core';

import {Actions, ofType} from "@ngrx/effects";

import * as TodoActions from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class TodoActionsService {
  public updateSuccess$ = this.actions$.pipe(ofType(TodoActions.updateSuccess));
  public updateFailed$ = this.actions$.pipe(ofType(TodoActions.updateFailed));

  constructor(
    private actions$: Actions,
  ) {
  }
}
