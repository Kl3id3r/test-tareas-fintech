// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { UsersComponent } from './users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
  ],
  declarations: [UsersComponent, UserAddComponent]
})
export class UsersModule { }
