import { Component, OnInit } from '@angular/core';

import { AuthLoginService } from './../services/auth-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogado = false;

  constructor(private auth: AuthLoginService) {
    this.auth.mostrarMenuEmitter.subscribe((resposta)=>{
        this.isLogado = resposta;
    });
  }

  ngOnInit(): void {
  }

}
