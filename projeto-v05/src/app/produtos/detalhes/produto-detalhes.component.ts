import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../../model/produto.model';

import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {
  public produto: Produto = new Produto();


  constructor(private rotaAtiva: ActivatedRoute,
              private produtosService: ProdutosService) { }

  ngOnInit(): void {
    const codigo: number = Number( this.rotaAtiva.snapshot.paramMap.get('id') );

    console.log('Código do produto', codigo);

    this.produtosService.get(codigo).subscribe((produto: Produto)=>{
      this.produto = produto;
    });
  }

}
