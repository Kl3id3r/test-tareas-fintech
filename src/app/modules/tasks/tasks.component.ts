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
import * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  vm$: Observable<fromAuthSelectors.AuthLinksViewModal>;

  constructor(
    public authService: AuthService,
    private store: Store<AppState>
  ) {
    this.vm$ = this.store.pipe(
      select(fromAuthSelectors.selectAuthLinksViewModel)
    );
  }

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user') || '');
    this.store.dispatch(browserReload({ user }));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
