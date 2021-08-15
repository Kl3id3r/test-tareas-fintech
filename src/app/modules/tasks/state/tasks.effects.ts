import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../resources/task.service';
import * as TaskActions from './tasks.actions';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class TaskEffects {
  // LOAD TASKS API EFFECT 
  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks()
          .then(tasks => TaskActions.loadTasksSuccess({ tasks }))
          .catch(error => TaskActions.loadTasksFailure({ error }))
      )
    );
  });

  // CREATE TASK API EFFECT 
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap((action) =>
        this.taskService.createTask(action.task)
          .then(task => TaskActions.addTasksuccess({ task }))
          .catch(error => TaskActions.addTaskFailure({ error }))
      )
    )
  );

  // UPDATE TASK API EFFECT
  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.upsertTask),
      mergeMap((action) =>
        this.taskService.editTask(action.task)
          .then(task => TaskActions.upsertTaskSuccess({ task }))
          .catch(error => TaskActions.upsertTaskFailure({ error }))
      ))
  );

  // DELETE PRODUCT API EFFECT
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap((action) =>
        this.taskService.deleteTask(action.taskId)
          .then(() => TaskActions.deleteTasksuccess())
          .catch(error => TaskActions.deleteTaskFailure({ error }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) { }
}
