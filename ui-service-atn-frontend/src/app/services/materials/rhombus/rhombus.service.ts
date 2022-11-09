import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import materialUrl from '../helper';

export interface Rhombus {
  rhombus: String;
}


@Injectable({
  providedIn: 'root'
})
export class RhombusService {

  private rhombusList: Rhombus[];
  private rhombusList$: Subject<Rhombus[]>

  constructor(private http: HttpClient) {
    this.rhombusList = [];
    this.rhombusList$ = new Subject();
  }

  // Añadir rombo con un metodo http POST
  public addRhombus(rhombus: Rhombus) {
    return this.http.post(`${materialUrl}/rhombus/`, rhombus);
  }

  // Obtener rombo con un metodo http POST y un Observable
  public getAllRhombus$(): Observable<Rhombus[]> {
    return <Observable<Rhombus[]>>this.http.get(`${materialUrl}/rhombus/`);
  }
  
}
