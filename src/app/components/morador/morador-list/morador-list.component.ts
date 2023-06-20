import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Morador } from 'src/app/models/morador';
import { MoradorService } from 'src/app/services/morador.service';

@Component({
  selector: 'app-morador-list',
  templateUrl: './morador-list.component.html',
  styleUrls: ['./morador-list.component.css']
})
export class MoradorListComponent implements OnInit {

  ELEMENT_DATA: Morador[] = []
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Morador>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor (
    private service: MoradorService
  ){}

  ngOnInit(): void {
    this.findAll();
      
  }



  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Morador>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

      
    })

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
