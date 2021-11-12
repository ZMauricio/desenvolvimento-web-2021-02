import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';

import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  public produtosLista: Array<Produto> = [ ];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getAll().subscribe((listaProdutos: Produto[])=>{
      this.produtosLista = listaProdutos;
    });
  }

}
