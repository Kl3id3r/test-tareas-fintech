import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) { }
  canLoad(): boolean {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}