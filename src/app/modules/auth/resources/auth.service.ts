import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  // Fake Login API
  login(username: string, password: string): Observable<User> {

    // Fake users
    const moockUsers: User[] = [
      { id: 'u-0', username: 'Administrador', email: 'admin@email.com', password: 'admin', isadmin: true },
      { id: 'u-1', username: 'Usuario', email: 'user@email.com', password: 'user', isadmin: false },
    ];

    const user = moockUsers.filter((user: User) => user.username === username && user.password === password);
    if (user.length) {
      return of(user[0]);
    } else {
      return throwError('Usuario o contraseña inválidos');
    }
  };
}
