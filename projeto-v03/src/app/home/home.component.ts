import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mensagem = 'Bom dia!';
  public nomeUsuario = 'Joãozinho';
  public srcImagem = "./../../assets/img/suco.jpg";
  public login = "chapolin@gmail.com";

  constructor() { }

  ngOnInit(): void {
  }

  public alerta() {

    console.log('Executou o evento');
    console.log(this.login);

  }
}
