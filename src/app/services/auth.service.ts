import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htttp: HttpClient) { }

  authenticate(creds: Credenciais){
return this.htttp.post(`${API_CONFIG.baseUrl}/login`, creds, {
  observe:'response',
 responseType: 'text'

}) 


}


  }

