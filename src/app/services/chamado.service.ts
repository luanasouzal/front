import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {


  constructor(private http: HttpClient) { }

findById(id: any): Observable<Chamado> {
    return this.http.get<Chamado>(`${API_CONFIG.baseUrl}/controles/${id}`);
  } 

findAll(): Observable<Chamado[]>{
  return this.http.get<Chamado[]>(`${API_CONFIG.baseUrl}/controles`);
}

create(chamado: Chamado): Observable<Chamado>
{
  return this.http.post<Chamado>(`${API_CONFIG.baseUrl}/controles`, chamado);
}

update(chamado: Chamado): Observable<Chamado>
{
  return this.http.post<Chamado>(`${API_CONFIG.baseUrl}/controles/${chamado.id}`,chamado );
}
}
