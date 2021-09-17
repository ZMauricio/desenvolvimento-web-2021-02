import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';

import { Produto } from './../model/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public produtosLista: Array<Produto> = [ ];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosLista = this.produtosService.getAll();
  }

}
