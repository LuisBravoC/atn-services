import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import reportUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { }

  // Añadir material con un metodo http POST
  public addReport(report: any) {
    return this.httpClient.post(`${reportUrl}/reports/`, report);
  }

}
