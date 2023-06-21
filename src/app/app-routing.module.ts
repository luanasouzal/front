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
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';


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

      {path:'chamados', component: ChamadoListComponent },
      {path:'chamados/create', component: ChamadoCreateComponent },
      {path:'chamados/update/:id', component: ChamadoUpdateComponent },

    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
