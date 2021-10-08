import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public titulo = "Seja bem vindo!";
  public imagemSRC = "./../../assets/img/cart-green.png";

  public login = "goku@dbz.jp";

  constructor() { }

  ngOnInit(): void {
  }

  public mensagem() {
    alert('Oi! Eu sou Goku!');
  }
}
