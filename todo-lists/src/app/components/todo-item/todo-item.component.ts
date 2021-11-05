import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo = {
    title: 'Todo item',
    done: false
  }

  newTitle: string = '';
  editMode: boolean = false;

  constructor(private todosService: TodosService) { }

  toggleDone(): void {
    this.todosService.toggleTodoStatus(this.todo);
  }

  update(): void {
    this.editMode = false;
    // Update nội dung title của todo item
    this.todo.title = this.newTitle;
  }

  undo(): void {
    // Huỷ form
    this.editMode = false;
  }

  openEdit(): void {
    this.newTitle = this.todo.title;
    this.editMode = true;
  }

  remove(): void {
    this.todosService.remove(this.todo);
  }
}
