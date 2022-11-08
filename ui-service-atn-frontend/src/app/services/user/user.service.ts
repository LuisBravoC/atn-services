import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import userUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // Añadir usuario con un metodo http POST
  public addUser(user: any) {
    return this.httpClient.post(`${userUrl}/users/`, user);
  }

}
