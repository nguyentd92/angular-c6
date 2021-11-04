import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: Todo = {
    title: 'Todo item',
    done: false
  }

  @Output() onRemove: EventEmitter<void>= new EventEmitter<void>();

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  toggleDone(): void {
    this.item.done = !this.item.done;
  }

  removeFromChild(): void {
    this.todosService.remove(this.item)
  }
}
