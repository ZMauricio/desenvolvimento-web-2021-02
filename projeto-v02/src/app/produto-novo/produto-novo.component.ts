import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';

import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {
  public produto: Produto = new Produto();

  constructor(private produtosService: ProdutosService, private rota: Router) { }

  ngOnInit(): void {
  }

  public cadastrar() {

    if (this.produto.nome) {
      this.produtosService.add(this.produto).subscribe((resposta)=>{
        console.log(resposta);

        this.rota.navigate(['/produtos']);
      });

    } else {
      alert('Campo novo está vazio!');
    }

  }
}
