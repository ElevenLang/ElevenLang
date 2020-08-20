import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'login',
  //   // canActivate: [IsNotSignedInGuard],
  //   loadChildren: '../pages/login/login.module#LoginModule'
  // },
  {
    path: '',
    loadChildren: './pages/layout/layout.module#LayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
