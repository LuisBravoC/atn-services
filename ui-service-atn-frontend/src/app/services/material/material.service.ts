import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import materialUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private httpClient: HttpClient) { }

    public añadirUsuario(material:any){
      return this.httpClient.post(`${materialUrl}/materials/`,material);
    }

}
