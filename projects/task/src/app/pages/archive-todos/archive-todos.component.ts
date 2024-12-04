import { Component } from '@angular/core';
import { Todo, TodoService } from '../../../services/todo.service';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-archive-todos',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './archive-todos.component.html',
  styleUrl: './archive-todos.component.css',
})
export class ArchiveTodosComponent {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.archivedTasks$.subscribe((todos) => {
      this.todos = todos;
    });
  }
}
