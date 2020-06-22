import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }, 
  { path: 'login', loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule) }, 
  { path: 'signup', loadChildren: () => import('./signup-page/signup-page.module').then(m => m.SignupPageModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
