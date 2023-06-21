import { PorteiroCreateComponent } from './components/porteiro/porteiro-create/porteiro-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PorteiroListComponent } from './components/porteiro/porteiro-list/porteiro-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { PorteiroUpdateComponent } from './components/porteiro/porteiro-update/porteiro-update.component';
import { PorteiroDeleteComponent } from './components/porteiro/porteiro-delete/porteiro-delete.component';
import { MoradorListComponent } from './components/morador/morador-list/morador-list.component';
import { MoradorCreateComponent } from './components/morador/morador-create/morador-create.component';
import { MoradorUpdateComponent } from './components/morador/morador-update/morador-update.component';
import { MoradorDeleteComponent } from './components/morador/morador-delete/morador-delete.component';
import { ControleListComponent } from './components/controle/controle-list/controle-list.component';
import { ControleCreateComponent } from './components/controle/controle-create/controle-create.component';
import { ControleUpdateComponent } from './components/controle/controle-update/controle-update.component';
import { ControleReadComponent } from './components/controle/controle-read/controle-read.component';



const routes: Routes = [

  {path:'login', component: LoginComponent},
  
  {
    path:'', component: NavComponent, canActivate:[AuthGuard] ,children:  [
      {path:'home', component: HomeComponent },

      {path:'porteiro', component: PorteiroListComponent },
      {path:'porteiro/create', component: PorteiroCreateComponent },
      {path:'porteiro/update/:id', component: PorteiroUpdateComponent },
      {path:'porteiro/delete/:id', component: PorteiroDeleteComponent },

      {path:'morador', component: MoradorListComponent },
      {path:'morador/create', component: MoradorCreateComponent },
      {path:'morador/update/:id', component: MoradorUpdateComponent },
      {path:'morador/delete/:id', component: MoradorDeleteComponent },

      {path:'controles', component: ControleListComponent },
      {path:'controles/create', component: ControleCreateComponent },
      {path:'controles/update/:id', component: ControleUpdateComponent },
      {path:'controles/read/:id', component: ControleReadComponent },
     

    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
