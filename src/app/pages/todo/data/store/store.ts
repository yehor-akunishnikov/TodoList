import {combineReducers, createFeatureSelector, createSelector} from "@ngrx/store";

import * as fromTodoReducer from '../store/reducers/todo.reducer';
import * as fromTodoLoadingReducer from '../store/reducers/todo-loading-state.reducer';

export const featureKey = '[TODO]';

export interface FeatureState {
  [featureKey]: TodoState
}

export interface TodoState {
  [fromTodoReducer.key]: fromTodoReducer.State,
  [fromTodoLoadingReducer.key]: fromTodoLoadingReducer.State,
}

export const featureReducer = combineReducers({
  [fromTodoReducer.key]: fromTodoReducer.reducer,
  [fromTodoLoadingReducer.key]: fromTodoLoadingReducer.reducer,
});

/*
* SELECTORS
* */
export const featureSelector = createFeatureSelector<FeatureState, TodoState>(featureKey);

export const todoSelector = createSelector<FeatureState, TodoState, fromTodoReducer.State>(
  featureSelector, (state) => state[fromTodoReducer.key]
);

export const todoLoadingSelector = createSelector<FeatureState, TodoState, fromTodoLoadingReducer.State>(
  featureSelector, (state) => state[fromTodoLoadingReducer.key]
);

export const todoSelectors = fromTodoReducer.adapter.getSelectors<FeatureState>(todoSelector);
