// Vendors
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: '',
        loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'usuarios' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
