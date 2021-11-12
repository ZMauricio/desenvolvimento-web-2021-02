import { Component, OnInit } from '@angular/core';


import { Produto } from '../model/produto.model';
import { ProdutosService } from './../services/produtos.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public listaProdutos: Produto[] = [];

  constructor(private produtosServ: ProdutosService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  public carregarDados() {
    this.produtosServ.getAll().subscribe((produtos: Produto[])=>{
      this.listaProdutos = produtos;
    });
  }

  public deletar(idProduto: number) {
    this.produtosServ.delete(idProduto).subscribe((resposta)=>{
      this.carregarDados();
    });
  }
}
