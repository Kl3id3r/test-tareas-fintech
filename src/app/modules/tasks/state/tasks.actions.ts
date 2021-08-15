import { createAction, props } from '@ngrx/store';
import { Task } from '../resources/Task';

// LOAD TASKS
export const loadTasks = createAction(
  '[Tasks Component] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[Tasks Effect] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const loadTasksFailure = createAction(
  '[Task Component] Load Tasks Failure',
  props<{ error: any }>()
);

// LOAD INDIVIDUAL TASKS
export const loadTask = createAction(
  '[Task View Component] Load Task',
  props<{ id: string }>()
);

export const loadTasksuccess = createAction(
  '[Task Effect] Load Task Success',
  props<{ task: Task }>()
);

export const loadTaskFailure = createAction(
  '[Task Effect] Load Product Task',
  props<{ error: any }>()
);

// ADD INDIVIDUAL TASK
export const addTask = createAction(
  '[Task Add Component] Add Task',
  props<{ task: Task }>()
);

export const addTasksuccess = createAction(
  '[Task Effect] Add Task Success',
  props<{ task: Task }>()
);

export const addTaskFailure = createAction(
  '[Task Effect] Add Task Failure',
  props<{ error: any }>()
);

// UPDATE INDIVIDUAL TASK
export const upsertTask = createAction(
  '[Task Edit Component] Upsert Task',
  props<{ task: Task }>()
);
export const upsertTaskSuccess = createAction(
  '[Task Effect] Upsert Task Success',
  props<{ task: Task }>()
);
export const upsertTaskFailure = createAction(
  '[Task Effect] Upsert Task failure',
  props<{ error: any }>()
);

// DELETE INDIVIDUAL TASK
export const deleteItemProduct = createAction(
  '[Task Item Component] Delete Task',
  props<{ taskId: number }>()
);

export const deleteTask = createAction(
  '[Task List Component] Delete Task',
  props<{ taskId: number }>()
);

export const deleteTasksuccess = createAction(
  '[Task Effect] Delete Task Success'
);
export const deleteTaskFailure = createAction(
  '[Task Effect] Delete Task Failure',
  props<{ error: any }>()
);

export const clearTasks = createAction('[Task/API] Clear Tasks');
