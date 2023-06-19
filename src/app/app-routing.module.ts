import { PorteiroCreateComponent } from './components/porteiro/porteiro-create/porteiro-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PorteiroListComponent } from './components/porteiro/porteiro-list/porteiro-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {path:'login', component: LoginComponent},
  
  {
    path:'', component: NavComponent, canActivate:[AuthGuard] ,children:  [
      {path:'home', component: HomeComponent },
      {path:'porteiro', component: PorteiroListComponent },
      {path:'porteiro/create', component: PorteiroCreateComponent }
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
