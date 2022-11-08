import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import materialUrl from './helper';

export interface Material {
  name: String;
  size: String;
  measure: String;
  quantity: String;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  
  private materialList: Material[];
  private materialList$: Subject<Material[]>

  constructor(private http: HttpClient) {
    this.materialList=[];
    this.materialList$ = new Subject();
  }

  // Añadir material con un metodo http POST
  public addMaterial(material: Material) {
    return this.http.post(`${materialUrl}/materials/`, material);
  }

  public getAllMaterials$(): Observable<Material[]> {
    return  <Observable<Material[]>>this.http.get(`${materialUrl}/materials/`);
  }

}
