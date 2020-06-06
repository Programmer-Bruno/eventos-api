import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/evento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  constructor(private http: HttpClient) { }

  getListEventos(): Observable<Evento[]> {
    const url = `${environment.eventosApiUrl}/evento`;
    return this.http.get<Evento[]>(url);
  }

  getEvento(id: number): Observable<Evento> {
    const url = `${environment.eventosApiUrl}/evento/${id}`;
    return this.http.get<Evento>(url);
  }

  addEvento(evento: Evento): Observable<Evento> {
    const url = `${environment.eventosApiUrl}/evento/${evento.casaDeShow.codigo}`;
    return this.http.post<Evento>(url, evento);
  }

  updateEvento(evento: Evento): Observable<Evento> {
    const url = `${environment.eventosApiUrl}/evento/${evento.codigo}`;
    return this.http.put<Evento>(url, evento);
  }

  deleteEvento(codigo: number): Observable<Evento> {
    const url = `${environment.eventosApiUrl}/evento/${codigo}`;
    return this.http.delete<Evento>(url);
  }
}
