import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import materialUrl from '../helper';

export interface Caliber {
  caliber: String;
}

@Injectable({
  providedIn: 'root'
})
export class CaliberService {

  private caliberList: Caliber[];
  private caliberList$: Subject<Caliber[]>

  constructor(private http: HttpClient) {
    this.caliberList = [];
    this.caliberList$ = new Subject();
  }

  // Añadir calibre con un metodo http POST
  public addCaliber(caliber: Caliber) {
    return this.http.post(`${materialUrl}/calibers/`, caliber);
  }

  // Obtener calibre con un metodo http POST y un Observable
  public getAllCalibers$(): Observable<Caliber[]> {
    return <Observable<Caliber[]>>this.http.get(`${materialUrl}/calibers/`);
  }

}
