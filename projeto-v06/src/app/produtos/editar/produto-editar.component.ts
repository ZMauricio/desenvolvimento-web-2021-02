import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/model/produto.model';

import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {
  public produto: Produto = new Produto();

  constructor(private produtosService: ProdutosService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.produtosService.get(codigo).subscribe((produto: Produto)=>{
      this.produto = produto;
    });
  }

  public atualizar() {
    this.produtosService.update(this.produto).subscribe((resposta)=>{
      console.log(resposta);
      this.rota.navigate(['/painel']);
    });
  }

}
