import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Morador } from 'src/app/models/morador';
import { MoradorService } from 'src/app/services/morador.service';

@Component({
  selector: 'app-morador-create',
  templateUrl: './morador-create.component.html',
  styleUrls: ['./morador-create.component.css']
})
export class MoradorCreateComponent implements OnInit {


  morador: Morador = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }
  nome: FormControl = new FormControl (null, Validators.minLength(3));
  cpf: FormControl = new FormControl (null, Validators.required);
  email: FormControl = new FormControl (null, Validators.email);
  senha: FormControl = new FormControl (null, Validators.minLength(3));


  constructor(
    private service: MoradorService,
    private tosat: ToastrService,
    private router: Router,
  ){}

  ngOnInit(): void {}

create(): void{
 
    this.service.create(this.morador).subscribe( ()=>{
    this.tosat.success('Cadastrado com sucesso', 'Cadastro');
    this.router.navigate(['moradors'])

  }, ex => {
    console.log(ex);
    if(ex.error.errors){
      ex.error.errors.forEach(element => {
        this.tosat.error(element.message);
        
      });
    }else{
      this.tosat.error(ex.error.message);
    }
  })
}

addPerfil(perfil: any): void {

if(this.morador.perfis.includes(perfil)){
  this.morador.perfis.splice( this.morador.perfis.indexOf(perfil),1)
  console.log(this.morador.perfis);

}else{
  this.morador.perfis.push(perfil);
  console.log(this.morador.perfis);
}

}

validaCampos(): boolean{
  return this.nome.valid &&  this.cpf.valid && 
   this.email.valid &&  this.senha.valid
}
}
