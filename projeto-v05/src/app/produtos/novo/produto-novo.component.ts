import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutosService } from '../../services/produtos.service';
import { Produto } from 'src/app/model/produto.model';


@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  public produto: Produto = new Produto();

  constructor(private produtoService: ProdutosService, private rota: Router) { }

  ngOnInit(): void {
  }

  public cadastrar() {

    if (this.produto.nome) {

      this.produtoService.add(this.produto).subscribe((resposta)=>{
        console.log(resposta);
        this.rota.navigate(['/painel']);
      });

    }

  }
}
