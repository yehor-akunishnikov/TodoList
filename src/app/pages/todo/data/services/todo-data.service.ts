import {Injectable} from '@angular/core';

import {select, Store} from '@ngrx/store';

import * as fromStore from '../store/store';
import * as TodoActions from '../store/actions';
import {Todo} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  public loading$ = this.store.pipe(select(fromStore.todoLoadingSelector));
  public entities$ = this.store.pipe(select(fromStore.todoSelectors.selectEntities));
  public ids$ = this.store.pipe(select(fromStore.todoSelectors.selectIds));
  public list$ = this.store.pipe(select(fromStore.todoSelectors.selectAll));
  public count$ = this.store.pipe(select(fromStore.todoSelectors.selectTotal));

  constructor(
    private store: Store<fromStore.FeatureState>,
  ) { }

  public create(todo: Todo): void {
    this.store.dispatch(TodoActions.create({todo}));
  }

  public load(): void {
    this.store.dispatch(TodoActions.load());
  }

  public loadOne(id: string): void {
    this.store.dispatch(TodoActions.loadOne({id}));
  }

  public update(todo: Todo): void {
    this.store.dispatch(TodoActions.update({todo}));
  }

  public delete(todo: Todo): void {
    this.store.dispatch(TodoActions.deleteById({todo}));
  }
}
