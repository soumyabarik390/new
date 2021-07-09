import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../app/layout/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  { path: 'login', component:LoginPageComponent},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layout/admin-layout/admin-layout.module').then(module => module.AdminLayoutModule),
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }

  //{ path: 'login', component:LoginPageComponent},
  //{
  //  path: '',
  //  component: AdminLayoutComponent,
    //children: [
      //{
        //path: '',
        //redirectTo: '/dashboard',
       // pathMatch: 'full',
      //},
       // {
      //path: 'dashboard',
      //loadChildren: () => import('./layout/admin-layout/admin-layout.module').then(module => module.AdminLayoutModule),
  //},
  //{
    //path: '**',
    //redirectTo: 'dashboard'
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
