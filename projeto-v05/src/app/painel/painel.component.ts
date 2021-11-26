import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public produtosLista: Produto[] = [];

  constructor(private produtosServ: ProdutosService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  public carregarDados() {
    this.produtosServ.getAll().subscribe((produtos: Produto[])=>{
      this.produtosLista = produtos;
    });
  }

  public deletar(id: number) {
    this.produtosServ.delete(id).subscribe((resposta)=>{
      this.carregarDados();
    });
  }
}
