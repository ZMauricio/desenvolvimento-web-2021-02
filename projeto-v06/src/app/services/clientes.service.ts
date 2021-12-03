import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from 'src/app/model/cliente.model';

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ClientesService {
  public isClientesUpdate = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/clientes');
  }

  public getById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:3000/clientes/'+id);
  }

  public add(cliente: Cliente): Observable<Cliente> {
    const clienteJSON = JSON.stringify(cliente);
    return this.http.post<Cliente>('http://localhost:3000/clientes', clienteJSON, httpOptions);
  }

  public update(cliente: Cliente): Observable<Cliente> {
    const id = cliente.id;
    const clienteJSON = JSON.stringify(cliente);
    return this.http.put<Cliente>('http://localhost:3000/clientes/'+id, clienteJSON, httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/clientes/'+id);
  }
}
