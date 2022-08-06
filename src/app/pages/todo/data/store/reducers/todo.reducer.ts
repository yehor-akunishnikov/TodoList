import {createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from "@ngrx/entity";

import * as TodoActions from '../actions';
import {Todo} from "../../../models";

export const key = 'todo';

export interface State extends EntityState<Todo> {
}

export const adapter = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,

  on(TodoActions.createSuccess, (state, {todo}) => {
    return adapter.addOne(todo, state);
  }),
  on(TodoActions.loadSuccess, (state, {todos}) => {
    return adapter.setAll(todos, state);
  }),
  on(TodoActions.loadOneSuccess, (state, {todo}) => {
    return adapter.setOne(todo, state);
  }),
  on(TodoActions.updateSuccess, (state, {todo}) => {
    return adapter.setOne(todo, state);
  }),
  on(TodoActions.deleteByIdSuccess, (state, {todo}) => {
    return adapter.removeOne(todo.id, state);
  }),
);
