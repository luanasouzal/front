import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Controle } from '../models/controle';

@Injectable({
  providedIn: 'root'
})
export class ControlesService { constructor(private http: HttpClient) { }

findById(id: any): Observable<Controle> {
    return this.http.get<Controle>(`${API_CONFIG.baseUrl}/controles/${id}`);
  } 

findAll(): Observable<Controle[]>{
  return this.http.get<Controle[]>(`${API_CONFIG.baseUrl}/controles`);
}

create(controle: Controle): Observable<Controle>
{
  return this.http.post<Controle>(`${API_CONFIG.baseUrl}/controles`, controle);
}

update(controle: Controle): Observable<Controle>
{
  return this.http.post<Controle>(`${API_CONFIG.baseUrl}/controles/${controle.id}`,controle );
}
}
