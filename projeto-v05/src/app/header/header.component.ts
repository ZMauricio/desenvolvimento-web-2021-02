import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mostrarMenu = false;

  constructor(private auth: AutenticacaoService) { }

  ngOnInit(): void {
    this.auth.menuHabilitado.subscribe((mensagem)=>{
      console.log(mensagem);
      this.mostrarMenu = mensagem;
    });
  }

}
