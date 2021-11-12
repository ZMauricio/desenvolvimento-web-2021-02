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

  public validarUsuario(user: Usuario): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios?email='+user.email+'&senha='+user.senha);
  }

  public add(usuario: Usuario): Observable<any> {
    const usuarioJSON = JSON.stringify(usuario);

    return this.http.post<Usuario>('http://localhost:3000/usuarios', usuarioJSON, httpOptions);
  }
}
