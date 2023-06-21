import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PorteiroListComponent } from './components/porteiro/porteiro-list/porteiro-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { PorteiroCreateComponent } from './components/porteiro/porteiro-create/porteiro-create.component';
import { NgxMaskApplierService } from 'ngx-mask/lib/ngx-mask-applier.service';
import { PorteiroUpdateComponent } from './components/porteiro/porteiro-update/porteiro-update.component';
import { PorteiroDeleteComponent } from './components/porteiro/porteiro-delete/porteiro-delete.component';
import { MoradorCreateComponent } from './components/morador/morador-create/morador-create.component';
import { MoradorDeleteComponent } from './components/morador/morador-delete/morador-delete.component';
import { MoradorUpdateComponent } from './components/morador/morador-update/morador-update.component';
import { MoradorListComponent } from './components/morador/morador-list/morador-list.component';
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './components/chamado/chamado-update/chamado-update.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    PorteiroListComponent,
    LoginComponent,
    PorteiroCreateComponent,
    PorteiroUpdateComponent,
    PorteiroDeleteComponent,
    MoradorCreateComponent,
    MoradorDeleteComponent,
    MoradorUpdateComponent,
    MoradorListComponent,
    ChamadoListComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent
    
  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
    
      timeOut:4000,
      closeButton: true,
      progressBar: true
      
     } ),
  
    
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }