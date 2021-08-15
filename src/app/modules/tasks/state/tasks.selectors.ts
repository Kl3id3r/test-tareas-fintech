import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as TaskReducer from './tasks.reducer';
import * as TaskModel from '../resources/Task';

export const selectTasksState = createFeatureSelector<TaskReducer.State>(
  TaskReducer.tasksFeatureKey
);

export const selectAllTasks = createSelector(
  selectTasksState,
  TaskReducer.selectAll
);

export const selectAllEntities = createSelector(
  selectTasksState,
  TaskReducer.selectEntities
);

// RETURN TASKS VIEW MODEL
export interface TasksViewModel {
  tasks: TaskModel.Task[];
}

export const selectTasksViewModel = createSelector(
  selectAllTasks,
  (
    tasks: TaskModel.Task[]
  ): TasksViewModel => {
    return {
      tasks
    };
  }
);

export const selectTasksPending = createSelector(
  selectAllTasks,
  (
    tasks: TaskModel.Task[]
  ): TasksViewModel => {
    return {
      tasks: tasks.filter(e => e.estatus == 0)
    };
  }
);

export const entityExists = createSelector(
  selectAllEntities,
  (entities: any, props: any): boolean => {
    return entities[props.id] == undefined ? false : true;
  }
);

export const selectEntityById = createSelector(
  selectAllEntities,
  (entities: any, props: any) => entities[props.id]
);
