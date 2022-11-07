import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import authlUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  //Generar token
  public generateToken(loginData:any){
    return this.httpClient.post(`${authlUrl}/generate-token`,loginData);
  }
}
