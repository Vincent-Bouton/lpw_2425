import { Component } from '@angular/core';
import { Todo, TodoService } from '../../../services/todo.service';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.tasks$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  loadTodos() {
    this.todos = this.todoService.getActiveTodos();
  }
}
