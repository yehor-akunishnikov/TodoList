import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {catchError, map, of, switchMap} from 'rxjs';

import {TodoRestService} from '../../../rest/services/todo-rest.service';
import * as TodoActions from '../actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private rest: TodoRestService,
  ) {
  }

  create$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.create),
    switchMap(({todo}) => this.rest.create(todo).pipe(
      map(todo => TodoActions.createSuccess({todo})),
      catchError((httpErrorResponse: HttpErrorResponse) => of(TodoActions.createFailed({httpErrorResponse})))
    ))
  ));

  load$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.load),
    switchMap(() => this.rest.readAll().pipe(
      map(todos => TodoActions.loadSuccess({todos})),
      catchError((httpErrorResponse: HttpErrorResponse) => of(TodoActions.loadFailed({httpErrorResponse}))),
    )),
  ));

  loadOne$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.loadOne),
    switchMap(({id}) => this.rest.readOne(id).pipe(
      map(todo => TodoActions.loadOneSuccess({todo})),
      catchError((httpErrorResponse: HttpErrorResponse) => of(TodoActions.loadOneFailed({httpErrorResponse}))),
    )),
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.update),
    switchMap(({todo}) => this.rest.update(todo).pipe(
      map(todo => TodoActions.updateSuccess({todo})),
      catchError((httpErrorResponse: HttpErrorResponse) => of(TodoActions.updateFailed({httpErrorResponse}))),
    )),
  ));

  delete$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.deleteById),
    switchMap(({todo}) => this.rest.delete(todo.id).pipe(
      map(() => TodoActions.deleteByIdSuccess({todo})),
      catchError((httpErrorResponse: HttpErrorResponse) => of(TodoActions.deleteByIdFailed({httpErrorResponse}))),
    )),
  ));
}
