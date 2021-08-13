import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../resources/auth';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User | undefined;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  onSubmit(f: NgForm) {
    this.store.dispatch(
      fromAuthActions.loginPage({
        username: f.value.username,
        password: f.value.password,
      })
    );
  }
}
