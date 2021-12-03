import { ThrowStmt } from '@angular/compiler';
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

  public indice: number = 1;
  public quantItens: number = 6;
  public totalItens: number = 0;
  public proximo: boolean = false;
  public paginas: any[] = [];


  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    // this.produtosService.getAll().subscribe( (produtos: Produto[])=> {
    //   this.produtosLista = produtos;
    // });
    this.produtosService.paginate(this.indice, this.quantItens).subscribe((resposta)=>{

      console.log(resposta);
      console.log(resposta.body);
      console.log(resposta.headers.get('X-Total-Count'));

      this.totalItens = Number(resposta.headers.get('X-Total-Count'));

      this.gerarIndice();

      let value = JSON.stringify(resposta.body);
      let lista: any[] = JSON.parse(value);

      this.produtosLista = lista.map((obj)=>{
        return {
         id: obj.id,
         nome: obj.nome,
         descricao: obj.descricao,
         valorCompra: obj.valorCompra,
         status: obj.status,
         imagem: obj.imagem
        }
      });


      if (this.indice < Math.ceil(this.totalItens/this.quantItens)) {
        this.proximo = true;
      }
      else {
        this.proximo = false;
      }

    });
  }

  public gerarIndice() {
    let maxPaginas = Math.ceil(this.totalItens/this.quantItens);

    for (let i=1; i<=maxPaginas; i++) {
      if (this.indice === i) {
        this.paginas.push({
          id: i,
          ativa: true
        });
      } else {
        this.paginas.push({
          id: i,
          ativa: false
        });
      }
    }
  }

  public mudarPaginar(pagina: number) {
    this.indice = pagina;

    this.produtosService.paginate(this.indice, this.quantItens).subscribe((resposta)=>{
      this.totalItens = Number(resposta.headers.get('X-Total-Count'));

      let value = JSON.stringify(resposta.body);
      let lista: any[] = JSON.parse(value);

      this.produtosLista = lista.map((obj)=>{
        return {
         id: obj.id,
         nome: obj.nome,
         descricao: obj.descricao,
         valorCompra: obj.valorCompra,
         status: obj.status,
         imagem: obj.imagem
        }
      });

      if (this.indice < Math.ceil(this.totalItens/this.quantItens)) {
        this.proximo = true;
      }
      else {
        this.proximo = false;
      }

    })
  }
}
