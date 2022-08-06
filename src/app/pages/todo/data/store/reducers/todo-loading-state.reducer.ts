import {createReducer, on} from '@ngrx/store';

import * as TodoActions from '../actions';
import {LoadingState} from "../../../models";

export const key = 'todo-loading-state';

export interface State extends LoadingState { }

export const initialState: State = {
  loadInProgress: true,
  createInProgress: false,
  updateInProgress: false,
  deleteInProgress: false,
};

export const reducer = createReducer(
  initialState,

  on(TodoActions.load, (state) => ({...state, loadInProgress: true})),
  on(TodoActions.loadSuccess, TodoActions.loadFailed, (state) => ({...state, loadInProgress: false})),

  on(TodoActions.create, (state) => ({...state, createInProgress: true})),
  on(TodoActions.createSuccess, TodoActions.createFailed, (state) => ({...state, createInProgress: false})),

  on(TodoActions.update, (state) => ({...state, updateInProgress: true})),
  on(TodoActions.updateSuccess, TodoActions.updateFailed, (state) => ({...state, updateInProgress: false})),

  on(TodoActions.deleteById, (state) => ({...state, deleteInProgress: true})),
  on(TodoActions.deleteByIdSuccess, TodoActions.deleteByIdFailed, (state) => ({...state, deleteInProgress: false})),
);
