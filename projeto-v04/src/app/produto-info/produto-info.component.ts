import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-produto-info',
  templateUrl: './produto-info.component.html',
  styleUrls: ['./produto-info.component.css']
})
export class ProdutoInfoComponent implements OnInit {
  public produto: Produto = new Produto();

  constructor(private produtosServ: ProdutosService, private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.produtosServ.get(id).subscribe((produto: Produto)=>{
      this.produto = produto;
    });
  }

}
