import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
import * as TaskActions from '../../modules/tasks/state/tasks.actions';

@Injectable()
export class SpinnerEffects {
  spinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginPage,
          TaskActions.addTask,
          TaskActions.upsertTask,
          TaskActions.deleteTask
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  spinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginSuccess,
          fromAuthActions.loginFailure,
          TaskActions.addTasksuccess,
          TaskActions.addTaskFailure,
          TaskActions.upsertTaskSuccess,
          TaskActions.upsertTaskFailure,
          TaskActions.deleteTasksuccess,
          TaskActions.deleteTaskFailure
        ),
        tap(() => {
          this.spinner.hide();
          // setTimeout(() => {
          // }, 1000);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private spinner: NgxSpinnerService) { }
}
