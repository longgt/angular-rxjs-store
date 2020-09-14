import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({providedIn: 'root'})
export class TodosService {
  private readonly apiBaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Todo[]>(`${this.apiBaseUrl}/todos`);
  }

  create(todo: Todo) {
    return this.http.post<Todo>(`${this.apiBaseUrl}/todos`, todo);
  }

  remove(id) {
    return this.http.delete(`${this.apiBaseUrl}/todos/${id}`);
  }

  setCompleted(id: string, isCompleted: boolean) {
    return this.http.put<Todo>(`${this.apiBaseUrl}/todos/${id}`, {isCompleted});
  }
}