import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Morador } from '../models/morador';

@Injectable({
  providedIn: 'root'
})
export class MoradorService {
 
  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Morador>{
    return this.http.get<Morador>(`${API_CONFIG.baseUrl}/moradores/${id}`);
  }

  findAll(): Observable<Morador[]> {
    return this.http.get<Morador[]>(`${API_CONFIG.baseUrl}/moradores`);
  }

  create(morador: Morador): Observable<Morador>{
return this.http.post<Morador>(`${API_CONFIG.baseUrl}/moradores`, morador);
  }

  update(morador: Morador): Observable<Morador>{
    return this.http.put<Morador>(`${API_CONFIG.baseUrl}/moradores/${morador.id}`, morador);
  }

  delete(id: any): Observable<Morador>{
    return this.http.delete<Morador>(`${API_CONFIG.baseUrl}/moradores/${id}`);
  }

}