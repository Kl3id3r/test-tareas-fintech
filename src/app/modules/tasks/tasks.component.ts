// Vendors
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Resources
import { User } from './../auth/resources/auth';
import { AppState } from './../../store/index';
import { AuthService } from './../auth/resources/auth.service';
import { logout } from './../../store/actions/auth.actions';
import { browserReload } from './../../store/actions/auth.actions';
// State
import * as fromTasksActions from './state/tasks.actions';
import * as formTaskViewModel from './state/tasks.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  vm$: Observable<formTaskViewModel.TasksViewModel>;

  constructor(
    public authService: AuthService,
    private store: Store<AppState>
  ) {
    this.vm$ = this.store.pipe(
      select(formTaskViewModel.selectTasksViewModel)
    );
  }

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user') || '');
    this.store.dispatch(browserReload({ user }));
    this.loadTasks();
  }

  loadTasks() {
    this.store.dispatch(
      fromTasksActions.loadTasks()
    );
  }

  logout() {
    this.store.dispatch(logout());
  }
}
