import { Component } from '@angular/core';
import { Todo } from './models/todo.model';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filterMode: 'todo' | 'done' | 'all' = 'all';
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {
    this.todos = this.todosService.todos
  }

  get todoList(): Todo[] {
    return this.todos;
  }

  addTodo(event: any): void {
    const newTodo: Todo = {
      title: event.target.value,
      done: false
    }

    this.todosService.add(newTodo)
  }
}
