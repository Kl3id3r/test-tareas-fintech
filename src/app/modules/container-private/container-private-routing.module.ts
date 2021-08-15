import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerPrivateComponent } from './container-private.component';

const routes: Routes = [{
  path: '',
  component: ContainerPrivateComponent,
  children: [
    {
      path: 'tareas',
      loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerPrivateRoutingModule { }
