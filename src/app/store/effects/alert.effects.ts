import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { AlertService } from 'ngx-alerts';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import * as fromTaskActions from '../../modules/tasks/state/tasks.actions';

@Injectable()
export class AlertEffects {
  // checkingYourInformation$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromAuthActions.loginPage),
  //       tap(() => this.alertService.info('Checking your information'))
  //     ),
  //   { dispatch: false }
  // );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
          alert(`¡Bienvenido ${action.user.username}!`)
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginFailure),
        tap(() => alert('Login no exitoso'))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => alert('¡Sesión finalizada!'))
      ),
    { dispatch: false }
  );

  unableToLoadTasks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.loadTasksFailure),
        tap(() =>
          setTimeout(() => {
            alert("¡Error al obtener tareas!")
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  taskCreated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.addTasksuccess),
        tap((action) => alert('¡Tarea creada con éxito!'))
      ),
    { dispatch: false }
  );

  unableToCreateTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.addTaskFailure),
        tap(() =>
          setTimeout(() => {
            alert('¡Error al crear tarea!')
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  taskUpsertSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.upsertTaskSuccess),
        tap(() =>
          setTimeout(() => {
            alert('¡Tarea Actualizada!')
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  unableToEditTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.upsertTaskFailure),
        tap(() =>
          setTimeout(() => {
            alert('¡Error al actualizar tarea!')
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  taskDeleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.deleteTasksuccess),
        tap(() =>
          setTimeout(() => {
            alert('¡Tarea eliminada!')
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  unableToDeleteTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.deleteTaskFailure),
        tap(() =>
          setTimeout(() => {
            alert('¡Error al eliminar tarea!')
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
