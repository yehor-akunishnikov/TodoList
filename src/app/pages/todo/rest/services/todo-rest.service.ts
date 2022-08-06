import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from "rxjs";

import {Todo} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class TodoRestService {
  private todos = 'https://62dc2d424438813a2612aa65.mockapi.io/api/todos';
  private todosId = (id: string): string => `${this.todos}/${id}`;

  constructor(
    private http: HttpClient,
  ) {
  }

  public create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todos, todo);
  }

  public readAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todos);
  }

  public readOne(id: string): Observable<Todo> {
    return this.http.get<Todo>(this.todosId(id));
  }

  public update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.todosId(todo.id), todo);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(this.todosId(id));
  }
}
