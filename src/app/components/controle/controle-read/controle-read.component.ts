
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
  selector: 'app-controle-read',
  templateUrl: './controle-read.component.html',
  styleUrls: ['./controle-read.component.css']
})
export class ControleReadComponent {


  
  controle: Controle = {
    status:'',
    observacoes: '',
    porteiro: '',
    morador: '', 
    dataEntrada:'',
    nomePorteiro:'',
    nomeMorador:'', 
     
  }

  


  constructor (
    private controlesService: ControlesService,
    private toastService: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
  
      
  }

}


