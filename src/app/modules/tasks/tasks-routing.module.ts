// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { TasksComponent } from './tasks.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
// Guards
import { AdminGuard } from '../auth/resources/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: '',
        component: TaskListComponent
      },
      {
        path: 'crear-tarea',
        component: TaskAddComponent,
        canActivate: [AdminGuard]
      },
    ],
  },
  { path: '', redirectTo: '/tareas' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule { }