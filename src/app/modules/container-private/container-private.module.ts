import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerPrivateComponent } from './container-private.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContainerPrivateRoutingModule } from './container-private-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ContainerPrivateRoutingModule,
    SharedModule
  ],
  declarations: [ContainerPrivateComponent]
})
export class ContainerPrivateModule { }
