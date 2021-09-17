import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from './../model/produto.model';

import { ProdutosService } from './../services/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  public produtosLista: Array<Produto> = [];

  public produto: Produto = new Produto();

  constructor(private rotaAtiva: ActivatedRoute,
              private produtosService: ProdutosService) { }

  ngOnInit(): void {
    const codigo = Number( this.rotaAtiva.snapshot.paramMap.get('id') );
    console.log(codigo);

    this.produto = this.produtosService.get(codigo);
  }
}
