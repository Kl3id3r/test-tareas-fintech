import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private store: Store<AppState>,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required]
    });
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      this.route.navigateByUrl('/tareas');
    }
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit() {
    this.form.markAllAsTouched();
    console.log(this.form);
    if (this.form.valid) {
      const data = { ...this.form.value };
      this.store.dispatch(
        fromAuthActions.loginPage(data)
      );
    }
  }
}
