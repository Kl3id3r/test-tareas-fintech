import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import Swal from 'sweetalert2';
import * as fromAuthActions from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import * as fromTaskActions from '../../modules/tasks/state/tasks.actions';

@Injectable()
export class AlertEffects {

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
          Swal.fire(`¡Bienvenido ${action.user.username}!`)
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginFailure),
        tap(() => Swal.fire({ title: 'Credenciales Inválidas', icon: 'error' }))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => Swal.fire('¡Sesión finalizada!'))
      ),
    { dispatch: false }
  );

  unableToLoadTasks$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.loadTasksFailure),
        tap(() =>
          setTimeout(() => {
            Swal.fire(({ title: 'Error al obtener tareas', icon: 'error' }))
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  taskCreated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.addTasksuccess),
        tap((action) => Swal.fire('¡Tarea creada con éxito!'))
      ),
    { dispatch: false }
  );

  unableToCreateTask$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromTaskActions.addTaskFailure),
        tap(() =>
          setTimeout(() => {
            Swal.fire(({ title: 'Error al crear tarea', icon: 'error' }))
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
            Swal.fire('¡Tarea Actualizada!')
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
            Swal.fire(({ title: 'Error al actualizar', icon: 'error' }))
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
            Swal.fire('¡Tarea eliminada!')
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
            Swal.fire(({ title: 'Error al eliminar tarea', icon: 'error' }))
          }, 1000)
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
