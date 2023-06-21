import { ControlesService } from 'src/app/services/controles.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Morador } from 'src/app/models/morador';
import { Porteiro } from 'src/app/models/porteiro';
import { MoradorService } from 'src/app/services/morador.service';
import { PorteiroService } from 'src/app/services/porteiro.service';
import { Controle } from 'src/app/models/controle';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-controle-create',
  templateUrl: './controle-create.component.html',
  styleUrls: ['./controle-create.component.css']
})
export class ControleCreateComponent implements OnInit {

  controle: Controle = {
    status:'',
    observacoes: '',
    porteiro: '',
    morador: '', 
    dataEntrada:'',
    nomePorteiro:'',
    nomeMorador:'', 
     
  }

  moradores: Morador[]= []
  porteiros: Porteiro[]= []


  status:     FormControl = new FormControl(null, [Validators.required]);
  observacoes:FormControl = new FormControl(null, [Validators.required]);
  porteiro:    FormControl = new FormControl(null, [Validators.required]);
  morador:    FormControl = new FormControl(null, [Validators.required]);
 
  


  constructor (
    private controlesService: ControlesService,
    private moradorService: MoradorService,
    private porteiroService: PorteiroService,
    private toastService: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.findAllMoradores();
    this.findAllPorteiros();
      
  }

  create(): void {
    this.controlesService.create(this.controle).subscribe(resposta => {
      this.toastService.success('Registro criado com sucesso', 'Novo registro');
      this.router.navigate(['controles']);
    }, ex => {
      console.log(ex);
      
      this.toastService.error(ex.error.error);
    })
  }

  findAllMoradores(): void{
    this.moradorService.findAll().subscribe(resposta => {
      this.moradores = resposta;
    })
  }

  findAllPorteiros(): void{
    this.porteiroService.findAll().subscribe(resposta => {
      this.porteiros = resposta;
    })
  }

  validaCampos(): boolean{
     return this.status.valid &&
            this.observacoes.valid &&
            this.porteiro.valid &&
            this.morador.valid 
  }

}
