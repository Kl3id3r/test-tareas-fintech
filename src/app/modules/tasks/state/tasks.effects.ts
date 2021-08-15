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

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) { }
}
