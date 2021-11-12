import { Injectable, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../model/usuario.model';

import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private usuarioAutenticado: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  public logar(usuario: Usuario) {

    this.usuariosService.validarUsuario(usuario).subscribe((resposta: Usuario[])=>{

      const [ usuarioLogado ] = resposta;

      if (usuarioLogado.email) {
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);
      } else {
        this.usuarioAutenticado = false;
        this.router.navigate(['/login']);
      }

    });
  }

  public isAutenticado() {
    return this.usuarioAutenticado;
  }
}
