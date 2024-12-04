import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TaskComponent } from '../task/task.component';
import { Todo } from '../../../services/todo.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TaskComponent, ButtonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() todos: Todo[] = [];
  @Input() component: string = '';
}
