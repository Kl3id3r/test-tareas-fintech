import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TaskActions from './tasks.actions';
import { Task } from '../resources/Task';

export const tasksFeatureKey = 'taks';

export interface State extends EntityState<Task> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  sortComparer: sortByName
});

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null
});

export const reducer = createReducer(
  initialState,
  on(TaskActions.loadTasksSuccess, (state, action) =>
    adapter.setAll(action.tasks, {
      ...state,
      tasks: action.tasks,
    })
  ),
  on(
    TaskActions.loadTasksuccess,
    TaskActions.addTasksuccess,
    (state, action) => adapter.addOne(action.task, state)
  ),
  on(TaskActions.upsertTaskSuccess, (state, action) =>
    adapter.upsertOne(action.task, state)
  ),
  on(
    TaskActions.deleteTask,
    TaskActions.deleteItemProduct,
    (state, action) => adapter.removeOne(action.taskId, state)
  ),
  on(TaskActions.clearTasks, (state) => adapter.removeAll(state)),
  on(
    TaskActions.upsertTaskFailure,
    TaskActions.loadTasksFailure,
    TaskActions.addTaskFailure,
    TaskActions.loadTaskFailure,
    TaskActions.deleteTaskFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export function sortByName(a: Task, b: Task): number {
  return a.nombre.localeCompare(b.nombre);
}
