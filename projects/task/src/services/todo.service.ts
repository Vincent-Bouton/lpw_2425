import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  archived: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Buy milk', completed: false, archived: false },
    { id: 2, title: 'Buy bread', completed: false, archived: true },
    { id: 3, title: 'Buy cheese', completed: false, archived: false },
  ];

  private taskSubject = new BehaviorSubject<Todo[]>(this.getActiveTodos());

  tasks$ = this.taskSubject.asObservable();

  private taskArchivedSubject = new BehaviorSubject<Todo[]>(
    this.getArchivedTodos(),
  );
  archivedTasks$ = this.taskArchivedSubject.asObservable();

  getActiveTodos() {
    return this.todos.filter((todo) => !todo.archived);
  }

  getArchivedTodos() {
    return this.todos.filter((todo) => todo.archived);
  }

  archiveTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.archived = true;
      this.taskSubject.next(this.getActiveTodos());
    }
  }

  restoreTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.archived = false;
      this.taskSubject.next(this.getActiveTodos());
      this.taskArchivedSubject.next(this.getArchivedTodos());
    }
  }

  achieveTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = true;
      this.taskSubject.next(this.getActiveTodos());
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.taskSubject.next(this.getActiveTodos());
    this.taskArchivedSubject.next(this.getArchivedTodos());
  }
  constructor() {}
}
