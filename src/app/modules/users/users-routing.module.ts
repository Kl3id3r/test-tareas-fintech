// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { UsersComponent } from './users.component';
import { UserAddComponent } from './user-add/user-add.component';
// Guards
import { AdminGuard } from '../auth/resources/admin.guard';
import { AuthGuard } from '../auth/resources/auth.guard';

const routes: Routes = [
  { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'crear-usuario', component: UserAddComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
