
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Porteiro } from 'src/app/models/porteiro';
import { PorteiroService } from 'src/app/services/porteiro.service';

@Component({
  selector: 'app-porteiro-delete',
  templateUrl: './porteiro-delete.component.html',
  styleUrls: ['./porteiro-delete.component.css']
})
export class PorteiroDeleteComponent {

  porteiro: Porteiro = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }
  

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

delete(): void{
 
    this.service.delete(this.porteiro.id).subscribe( ()=>{
    this.tosat.success('Deletado com sucesso', 'Delete');
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

}





