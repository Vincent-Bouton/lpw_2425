import { Component, Input } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() action: string = 'done';
  @Input() id: number = 0;

  constructor(private todoService: TodoService) {}

  actionButton() {
    switch (this.action) {
      case 'done':
        this.achieve(this.id);
        break;
      case 'delete':
        this.delete(this.id);
        break;
      case 'archive':
        this.archive(this.id);
        break;
      case 'redo':
        this.unarchive(this.id);
        break;
    }
    this.todoService.getActiveTodos();
    this.todoService.getArchivedTodos();
  }

  archive(id: number) {
    this.todoService.archiveTodo(id);
  }

  achieve(id: number) {
    this.todoService.achieveTodo(id);
  }

  unarchive(id: number) {
    this.todoService.restoreTodo(id);
  }
  delete(id: number) {
    this.todoService.deleteTodo(id);
  }
}
