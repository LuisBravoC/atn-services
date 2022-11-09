import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import materialUrl from '../helper';

export interface Height {
  height: String;
}

@Injectable({
  providedIn: 'root'
})
export class HeightsService {

  private heightList: Height[];
  private heightList$: Subject<Height[]>

  constructor(private http: HttpClient) {
    this.heightList = [];
    this.heightList$ = new Subject();
  }

  // Añadir calibre con un metodo http POST
  public addHeight(height: Height) {
    return this.http.post(`${materialUrl}/heights/`, height);
  }

  // Obtener calibre con un metodo http POST y un Observable
  public getAllHeights$(): Observable<Height[]> {
    return <Observable<Height[]>>this.http.get(`${materialUrl}/heights/`);
  }

}
