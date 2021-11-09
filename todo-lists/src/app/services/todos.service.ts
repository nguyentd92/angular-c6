import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TodosService {
  todos: Todo[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    this.loadTodo()
  }

  loadTodo(): void {
    this.httpClient.get<Todo[]>('todos')
      .subscribe(res => {
        this.todos.splice(0);
        this.todos.push(...res)
      })
  }

  add(todo: Todo): void {
    this.httpClient.post<Todo>('todos', todo)
      .subscribe(res => this.todos.push(res))
  }

  update(todo: Todo, newTodo: Todo): void {
    this.httpClient.put<Todo>('todos/' + todo.id, newTodo)
      .subscribe(res => {
        this.loadTodo()
        // this.todos.splice(this.todos.findIndex(t => t.id === todo.id), 1, res);
      })
  }

  toggleTodoStatus(todo: Todo): void {
    this.httpClient.patch<Todo>('todos/' + todo.id, {
      done: !todo.done
    }).subscribe(
      // Next
      _ => todo.done = !todo.done,
      // Error
      err => alert('Xảy ra lỗi'),
      // Complete
      () => console.log('complete')
    )
  }

  remove(todo: Todo): void {
    this.httpClient.delete<Todo>('todos/' + todo.id).subscribe(_ => {
      this.todos.splice(this.todos.indexOf(todo), 1);
    })
  }
}
