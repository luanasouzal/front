import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Porteiro } from 'src/app/models/porteiro';

@Component({
  selector: 'app-porteiro-list',
  templateUrl: './porteiro-list.component.html',
  styleUrls: ['./porteiro-list.component.css']
})
export class PorteiroListComponent implements OnInit {

  ELEMENT_DATA: Porteiro[] = [
    {
      id:1,
      nome: 'Luana Souza',
      cpf: '123.456.789-02',
      email: 'luana@gmail.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '15/05/2023',

    }
  ]
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Porteiro>(this.ELEMENT_DATA);

  
  constructor (){}

  ngOnInit(): void {
      
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

