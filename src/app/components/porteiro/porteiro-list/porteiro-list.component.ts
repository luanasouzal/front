import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Porteiro } from 'src/app/models/porteiro';
import { PorteiroService } from 'src/app/services/porteiro.service';

@Component({
  selector: 'app-porteiro-list',
  templateUrl: './porteiro-list.component.html',
  styleUrls: ['./porteiro-list.component.css']
})
export class PorteiroListComponent implements OnInit {

  ELEMENT_DATA: Porteiro[] = []
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Porteiro>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor (
    private service: PorteiroService
  ){}

  ngOnInit(): void {
    this.findAll();
      
  }



  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Porteiro>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

      
    })

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
