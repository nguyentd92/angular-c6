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
  todos: Todo[] = INITIAL_TODOS;
  todoEdit: Todo | null = null;
  filterMode: 'todo' | 'done' | 'all' = 'all';

  get todoList(): Todo[] {
    if(this.filterMode === 'done')
      return this.todos.filter(todo => todo.done)

    if(this.filterMode === 'todo')
      return this.todos.filter(todo => !todo.done)

    return this.todos;
  }

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

  openEdit(todo: Todo): void {
    this.todoEdit = todo;
  }

  undo(): void {
    this.todoEdit = null;
  }

  doneEdit(event: any): void {
    const todoEdit = this.todoEdit as Todo;

    todoEdit.title = event.target.value;

    this.todoEdit = null;
  }
}
