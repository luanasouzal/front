import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Porteiro } from '../models/porteiro';

@Injectable({
  providedIn: 'root'
})
export class PorteiroService {
 
  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Porteiro>{
    return this.http.get<Porteiro>(`${API_CONFIG.baseUrl}/porteiros/${id}`);
  }

  findAll(): Observable<Porteiro[]> {
    return this.http.get<Porteiro[]>(`${API_CONFIG.baseUrl}/porteiros`);
  }

  create(porteiro: Porteiro): Observable<Porteiro>{
return this.http.post<Porteiro>(`${API_CONFIG.baseUrl}/porteiros`, porteiro);
  }

  update(porteiro: Porteiro): Observable<Porteiro>{
    return this.http.put<Porteiro>(`${API_CONFIG.baseUrl}/porteiros/${porteiro.id}`, porteiro);
  }

  delete(id: any): Observable<Porteiro>{
    return this.http.delete<Porteiro>(`${API_CONFIG.baseUrl}/porteiros/${id}`);
  }

}