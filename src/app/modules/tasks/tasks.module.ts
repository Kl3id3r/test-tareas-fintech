// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../../shared/shared.module';
// import { RouterModule } from '@angular/router';

// State
import * as fromTask from './state/tasks.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './state/tasks.effects';

// Components
import { TasksComponent } from './tasks.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromTask.tasksFeatureKey, fromTask.reducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
  declarations: [
    TasksComponent,
    TaskAddComponent,
    TaskListComponent
  ]
})
export class TasksModule { }
