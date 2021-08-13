import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from 'src/app/modules/auth/resources/auth';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: '',
    username: '',
    email: '',
    isadmin: false,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, { user }) => {
    return {
      ...state,
      user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      user: {
        id: '',
        username: '',
        email: '',
        isadmin: false,
      },
      error
    };
  }),
  on(AuthActions.logout, (state) => {
    return {
      ...state,
      user: {
        id: '',
        username: '',
        email: '',
        isadmin: false,
      },
      error: null,
    };
  })
);
