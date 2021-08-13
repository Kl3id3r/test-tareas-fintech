// Vendors
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Resources
import { AppState } from './../../store/index';
import { AuthService } from './../auth/resources/auth.service';
import { logout } from './../../store/actions/auth.actions';
import * as fromAuthSelectors from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
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
  }

  logout() {
    this.store.dispatch(logout());
  }
}
