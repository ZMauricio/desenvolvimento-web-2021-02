import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';

import { AuthLoginService } from './../services/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public titulo = "Seja bem vindo!";
  public imagemSRC = "./../../assets/img/cart-green.png";

  public usuario: Usuario = new Usuario();

  constructor(private authLogin: AuthLoginService) { }

  ngOnInit(): void {
  }

  public realizarLogin(form) {

    console.log(form);

    if (form.valid) {
      this.authLogin.logar(this.usuario);
    } else {
      console.log('O formulário não está pronto!');
    }


  }
}
