
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Morador } from 'src/app/models/morador';
import { MoradorService } from 'src/app/services/morador.service';

@Component({
  selector: 'app-morador-delete',
  templateUrl: './morador-delete.component.html',
  styleUrls: ['./morador-delete.component.css']
})
export class MoradorDeleteComponent {

  morador: Morador = {
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }
  

  constructor(
    private service: MoradorService,
    private tosat: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {

    this.morador.id  = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.morador.id).subscribe(resposta =>{
      resposta.perfis = []
      this.morador = resposta;
    })
  }

delete(): void{
 
    this.service.delete(this.morador.id).subscribe( ()=>{
    this.tosat.success('Deletado com sucesso', 'Delete');
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

}





