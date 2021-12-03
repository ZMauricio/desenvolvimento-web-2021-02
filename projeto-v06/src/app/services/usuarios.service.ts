import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from './../model/usuario.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

  public getAuthUsuario(usuario: Usuario): Observable<Usuario[]> {
    console.log('getAuthUsuario');

    console.log('usuario', usuario);

    return this.http.get<Usuario[]>('http://localhost:3000/usuarios?email='
                          +usuario.email+'&senha='+usuario.senha);
  }

  public add(usuario: Usuario): Observable<any> {
    const usuarioJSON = JSON.stringify(usuario);
    return this.http.post<Usuario>('http://localhost:3000/usuarios', usuarioJSON, httpOptions);
  }
}
