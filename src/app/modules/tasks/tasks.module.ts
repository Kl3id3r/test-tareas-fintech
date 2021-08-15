// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { TasksComponent } from './tasks.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    RouterModule,
  ],
  declarations: [
    TasksComponent,
    TaskAddComponent,
    TaskListComponent
  ]
})
export class TasksModule { }
