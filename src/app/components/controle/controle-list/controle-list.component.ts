
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Controle } from 'src/app/models/controle';
import { ControlesService } from 'src/app/services/controles.service';

@Component({
  selector: 'app-controle-list',
  templateUrl: './controle-list.component.html',
  styleUrls: ['./controle-list.component.css']
})
export class ControleListComponent {
  ELEMENT_DATA: Controle[] = []
  FILTERED_DATA: Controle[] = []
  
  displayedColumns: string[] = ['id','morador', 'status','porteiro','dataEntrada', 'dataSaida','acoes'];
  dataSource = new MatTableDataSource<Controle>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;




  constructor(
    private service: ControlesService
  ){}
  
  ngOnInit(): void {
    this.findAll();
      
  }

  
  findAll():void {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Controle>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaStatus(status: any): string{
    if (status == '0'){
      return 'ABERTO'
    }else {
      return 'FECHADO'
    }

  }

  orderByStatus(status: any): void{
    let list: Controle[] = []
    this.ELEMENT_DATA.forEach(element => {
      if(element.status == status)
        list.push(element)
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Controle>(list);
    this.dataSource.paginator = this.paginator;
  }


  }




