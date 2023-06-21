import { Component } from '@angular/core';
import { ChamadoService } from 'src/app/services/chamado.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Morador } from 'src/app/models/morador';
import { Porteiro } from 'src/app/models/porteiro';
import { MoradorService } from 'src/app/services/morador.service';
import { PorteiroService } from 'src/app/services/porteiro.service';
import { Chamado } from 'src/app/models/chamado';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent {
  
  chamado: Chamado = {
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
    private chamadoService: ChamadoService,
    private moradorService: MoradorService,
    private porteiroService: PorteiroService,
    private toastService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllMoradores();
    this.findAllPorteiros();
      
  }
  findById(): void {
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  } 

  update(): void {
    this.chamadoService.update(this.chamado).subscribe(resposta => {
      this.toastService.success('Registro atualizado com sucesso', 'Atualização registro');
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



