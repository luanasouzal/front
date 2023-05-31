import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  creds:  Credenciais = {
    email: '',
    senha:''
  }
  
  email= new FormControl(null, Validators.email);
  senha= new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private service: AuthService
    ) {}

  ngOnInit(): void {
      
  }

  logar(){
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.toast.info(resposta.headers.get('Authorization'))
    })

  }

  validaCampos(): boolean{
    return this.email.valid && this.senha.valid
  }

}
function validaCampos() {
  throw new Error('Function not implemented.');
}

