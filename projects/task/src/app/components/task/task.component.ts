import { Component, Input, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Todo, TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() todo: Todo = { id: 0, title: '', completed: false, archived: false };
  @Input() component: string = '';

  actions: string[] = [];

  ngOnInit() {
    if (this.component === 'home') {
      this.actions = ['done', 'archive'];
    } else if (this.component === 'archive') {
      this.actions = ['redo', 'delete'];
    }
  }
}
