import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  {path:'app', loadChildren:()=>import('./auth/auth.module')
  .then(t=>t.AuthModule)},
  {path:'home', loadChildren:()=>import('./home/home.module')
  .then(t=>t.HomeModule)},
  {path:'', redirectTo: 'app', pathMatch: 'full'},
 // {path:'', redirectTo:'login',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
