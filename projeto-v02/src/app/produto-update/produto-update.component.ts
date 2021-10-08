import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from 'src/app/services/produtos.service';

import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  public produto: Produto;

  constructor(private produtosService: ProdutosService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.produtosService.get(codigo).subscribe((produto)=> {
      this.produto = produto;
    });

  }

  public atualizar() {
    if (this.produto.id) {
      this.produtosService.update(this.produto).subscribe((resposta)=>{
        console.log(resposta);
        this.rota.navigate(['/produtos']);
      });
    } else {
      alert('Verifique se todos os campos estão preenchido!');
    }
  }

  public deletar() {
    if (this.produto.id || this.produto.id === 0) {
      this.produtosService.delete(this.produto.id).subscribe((resposta)=>{
        this.rota.navigate(['/produtos']);
      });

    }
  }

}
