import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasaShow } from '../interfaces/casa-show';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasaShowService {
  constructor(private http: HttpClient) { }

  getListCasaShow(): Observable<CasaShow[]> {
    const url = `${environment.eventosApiUrl}/casaDeShow`;
    return this.http.get<CasaShow[]>(url);
  }

  getCasaShow(codigo: number): Observable<CasaShow> {
    const url = `${environment.eventosApiUrl}/casaDeShow/${codigo}`;
    return this.http.get<CasaShow>(url);
  }

  addCasaShow(casaDeShow: CasaShow): Observable<CasaShow> {
    const url = `${environment.eventosApiUrl}/casaDeShow`;
    return this.http.post<CasaShow>(url, casaDeShow);
  }

  updateCasaShow(casaDeShow: CasaShow): Observable<CasaShow> {
    const url = `${environment.eventosApiUrl}/casaDeShow/${casaDeShow.codigo}`;
    return this.http.put<CasaShow>(url, casaDeShow);
  }

  deleteCasaShow(codigo: number): Observable<CasaShow> {
    const url = `${environment.eventosApiUrl}/casaDeShow/${codigo}`;
    return this.http.delete<CasaShow>(url);
  }
}
