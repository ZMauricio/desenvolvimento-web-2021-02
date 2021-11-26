import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { AutenticacaoService } from './../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario = new Usuario();

  constructor(private auth: AutenticacaoService) { }

  ngOnInit(): void {
  }

  public realizarLogin(formulario: any) {
    console.log(formulario);
    console.log(formulario.valid);
    console.log(formulario.value);

    if (formulario.valid) {
      this.usuario.email = formulario.value.email;
      this.usuario.senha = formulario.value.senha;

      this.auth.logar(this.usuario);
    }


  }
}
