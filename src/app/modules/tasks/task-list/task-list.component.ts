import { User } from 'src/app/modules/auth/resources/auth';
import { browserReload } from './../../../store/actions/auth.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { TasksComponent } from './../tasks.component';
import { ChangeDetectionStrategy, Component, Host, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import * as fromTasksActions from '../state/tasks.actions';
import * as formTaskViewModel from '../state/tasks.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  vm$: Observable<formTaskViewModel.TasksViewModel>;
  constructor(
    @Host() private _appTasks: TasksComponent,
    private store: Store<AppState>
  ) {
    this.vm$ = this.store.pipe(
      select(formTaskViewModel.selectTasksViewModel)
    );
  }

  ngOnInit() {
    this.loadTasks();
    const user: User = JSON.parse(localStorage.getItem('user') || '');
    this.store.dispatch(browserReload({ user }));
  }

  loadTasks() {
    this.store.dispatch(
      fromTasksActions.loadTasks()
    );
  }

  updateTask(id: number) {
    this._appTasks.taskId = id;
  }

  deleteTask(taskId: number) {
    Swal.fire({
      title: '¿Seguro de eliminar esta tarea?',
      text: "¡Los cambios no serán revertidos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#223E6D',
      cancelButtonColor: '#f46363',
      confirmButtonText: 'Si, porfavor'
    }).then(result => {
      if (result.isConfirmed) {
        this.store.dispatch(fromTasksActions.deleteTask({ taskId }));
      }
    })
  }
}
