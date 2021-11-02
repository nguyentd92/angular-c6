import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = INITIAL_TODOS;

  addTodo(event: any): void {
    this.todos.push({
      done: false,
      title: event.target.value
    })

    event.target.value = ''
  }

  toggleDone(todo: Todo) {
    todo.done = !todo.done;
  }

  remove(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo)
  }
}
