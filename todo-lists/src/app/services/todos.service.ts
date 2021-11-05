import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

const INITIAL_TODOS: Array<Todo> = [
  {
    done: true,
    title: 'Shopping',
  },
  {
    done: false,
    title: 'Workout',
  },
  {
    done: false,
    title: 'Do Exercises',
  },
  {
    done: false,
    title: 'Do Exercises 1',
  }
]

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = INITIAL_TODOS;

  add(todo: Todo): void {
    this.todos.push(todo)
  }

  update(todo: Todo, newTodo: Todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1, newTodo)
  }

  toggleTodoStatus(todo: Todo): void {
    todo.done = !todo.done;
  }

  remove(todo: Todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
