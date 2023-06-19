
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

  findAll(): Observable<Porteiro[]> {
    return this.http.get<Porteiro[]>(`${API_CONFIG.baseUrl}/porteiros`);
  }

  create(porteiro: Porteiro): Observable<Porteiro>{
return this.http.post<Porteiro>(`${API_CONFIG.baseUrl}/porteiros`, porteiro);
  }
}