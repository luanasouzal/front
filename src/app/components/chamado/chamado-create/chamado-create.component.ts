import { ChamadoService } from 'src/app/services/chamado.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Morador } from 'src/app/models/morador';
import { Porteiro } from 'src/app/models/porteiro';
import { MoradorService } from 'src/app/services/morador.service';
import { PorteiroService } from 'src/app/services/porteiro.service';
import { Chamado } from 'src/app/models/chamado';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  chamado: Chamado = {
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
  dataEntrada:    FormControl = new FormControl(null, [Validators.required]);
  


  constructor (
    private chamadoService: ChamadoService,
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
    this.chamadoService.create(this.chamado).subscribe(resposta => {
      this.toastService.success('Registro criado com sucesso', 'Novo registro');
      this.router.navigate(['chamados']);
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
