import { CardProfileComponent } from './components/card-profile/card-profile.component';
// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContainerPrivateRoutingModule } from './container-private-routing.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ContainerPrivateComponent } from './container-private.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ContainerPrivateRoutingModule,
    SharedModule
  ],
  declarations: [
    ContainerPrivateComponent,
    HeaderComponent,
    LeftMenuComponent,
    CardProfileComponent
  ],
  exports: [
    CardProfileComponent
  ]
})
export class ContainerPrivateModule { }
