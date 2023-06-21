import { Component } from '@angular/core';
import { ControlesService } from 'src/app/services/controles.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Morador } from 'src/app/models/morador';
import { Porteiro } from 'src/app/models/porteiro';
import { MoradorService } from 'src/app/services/morador.service';
import { PorteiroService } from 'src/app/services/porteiro.service';
import { Controle } from 'src/app/models/controle';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-controle-update',
  templateUrl: './controle-update.component.html',
  styleUrls: ['./controle-update.component.css']
})
export class ControleUpdateComponent {
  
  controle: Controle = {
    status:'',
    observacoes: '',
    porteiro: '',
    morador: '', 
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
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.controle.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllMoradores();
    this.findAllPorteiros();
      
  }
  findById(): void {
    this.controlesService.findById(this.controle.id).subscribe(resposta => {
      this.controle = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  } 

  update(): void {
    this.controlesService.update(this.controle).subscribe(resposta => {
      this.toastService.success('Registro atualizado com sucesso', 'Atualização registro');
      this.router.navigate(['controle']);
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



