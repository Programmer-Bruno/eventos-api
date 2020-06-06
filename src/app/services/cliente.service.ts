import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getListClientes(): Observable<Cliente[]> {
    const url = `${environment.eventosApiUrl}/cliente`;
    return this.http.get<Cliente[]>(url);
  }

  getCliente(id: number): Observable<Cliente> {
    const url = `${environment.eventosApiUrl}/cliente/${id}`;
    return this.http.get<Cliente>(url);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.eventosApiUrl}/cliente/`;
    return this.http.post<Cliente>(url, cliente);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${environment.eventosApiUrl}/cliente/`;
    return this.http.put<Cliente>(url, cliente);
  }

  deleteCliente(id: number): Observable<Cliente> {
    const url = `${environment.eventosApiUrl}/cliente/${id}`;
    return this.http.delete<Cliente>(url);
  }
}
