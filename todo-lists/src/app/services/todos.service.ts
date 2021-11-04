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
  }
]

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = INITIAL_TODOS;

  constructor() { }

  remove(todo: Todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
    
    console.log('remove ', this.todos)
  }
}
