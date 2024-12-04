import { Routes } from '@angular/router';
import { ArchiveTodosComponent } from './pages/archive-todos/archive-todos.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'archive',
    component: ArchiveTodosComponent,
  },
];
