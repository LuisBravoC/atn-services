import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import authlUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  // Generar token
  public generateToken(loginData: any) {
    return this.http.post(`${authlUrl}/generate-token`, loginData);
  }

  // Obtener usuario actual
  public getCurrentUser() {
    return this.http.get(`${authlUrl}/current-user`);
  }

  // Inicio de sesion y guardar token en localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  // Comprobar si hay token guardado en el localStorage
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // Cerrar sesion y eliminar token
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // Obtener token
  public getToken() {
    return localStorage.getItem('token');
  }

  // Establecer usuario en el localStorage
  public setUser(user: any) {
    delete user['password'];
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Obtener usuario
  public getUser() {
    let userStr = localStorage.getItem('user');

    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  // Obtener rol del usuario
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public isAdmin() {
    let user = this.getUser();
    let tokenStr = localStorage.getItem('token');

    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {

      if (user.authorities[0].authority == 'ADMIN') {
        return true;
      } else {
        return false;
      }

    }
  }

  public isNormal() {
    let user = this.getUser();
    let tokenStr = localStorage.getItem('token');

    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {

      if (user.authorities[0].authority == 'NORMAL') {
        return true;
      } else {
        return false;
      }

    }
  }

}
