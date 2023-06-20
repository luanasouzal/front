import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Porteiro } from 'src/app/models/porteiro';
import { PorteiroService } from 'src/app/services/porteiro.service';

@Component({
  selector: 'app-porteiro-update',
  templateUrl: './porteiro-update.component.html',
  styleUrls: ['./porteiro-update.component.css']
})
export class PorteiroUpdateComponent {
  porteiro: Porteiro = {
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
    private service: PorteiroService,
    private tosat: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {

    this.porteiro.id  = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.porteiro.id).subscribe(resposta =>{
      resposta.perfis = []
      this.porteiro = resposta;
    })
  }

update(): void{
 
    this.service.update(this.porteiro).subscribe( ()=>{
    this.tosat.success('Atualizado com sucesso', 'Update');
    this.router.navigate(['porteiros'])

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

if(this.porteiro.perfis.includes(perfil)){
  this.porteiro.perfis.splice( this.porteiro.perfis.indexOf(perfil),1)
  console.log(this.porteiro.perfis);

}else{
  this.porteiro.perfis.push(perfil);
  console.log(this.porteiro.perfis);
}

}

validaCampos(): boolean{
  return this.nome.valid &&  this.cpf.valid && 
   this.email.valid &&  this.senha.valid
}
}



