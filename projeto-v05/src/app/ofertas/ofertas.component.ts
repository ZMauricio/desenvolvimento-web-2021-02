import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';

import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  public produtosLista: Array<any> = [ ];


  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getAll().subscribe( (produtos: Produto[])=> {
      this.produtosLista = produtos;
    });
  }

}
