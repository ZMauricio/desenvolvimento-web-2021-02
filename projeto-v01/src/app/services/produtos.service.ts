import { Injectable } from '@angular/core';

import { Produto } from './../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public produtosLista: Array<Produto> = [
    {
      id: 0,
      nome: 'Pimentão',
      valorVenda: 2.55,
      status: true,
      descricao: 'Produto orgânico (livre de agrotóxicos)',
      imagem: './../../assets/img/pimentao-01.jpg'
    },
    {
      id: 1,
      nome: 'Jiló',
      valorVenda: 4.50,
      status: true,
      descricao: 'Produto orgânico (livre de agrotóxicos)',
      imagem: './../../assets/img/pimentao-01.jpg'
    },
    {
      id: 2,
      nome: 'Couve',
      valorVenda: 1.55,
      status: true,
      descricao: 'Produto orgânico (livre de agrotóxicos)',
      imagem: './../../assets/img/pimentao-01.jpg'
    },
    {
      id: 3,
      nome: 'Alface',
      valorVenda: 3.20,
      status: true,
      descricao: 'Produto orgânico (livre de agrotóxicos)',
      imagem: './../../assets/img/pimentao-01.jpg'
    },
    {
      id: 4,
      nome: 'Abóbora',
      valorVenda: 6.00,
      status: true,
      descricao: 'Produto orgânico (livre de agrotóxicos)',
      imagem: './../../assets/img/pimentao-01.jpg'
    },
    {
      id: 5,
      nome: 'Abobrinha',
      valorVenda: 7.10,
      status: true,
      descricao: 'Produto orgânico (livre de agrotóxicos)',
      imagem: './../../assets/img/pimentao-01.jpg'
    }
  ];

  constructor() { }

  public getAll(): Array<Produto> {
    return this.produtosLista;
  }

  public get(id: number): Produto {
    for (let obj of this.produtosLista) {
      if (obj.id === id) {
        return obj;
      }
    }

    return new Produto();
  }

  public add(produto: Produto) {
    if (produto.nome) {
      produto.id = this.produtosLista.length;
      produto.imagem = './../../assets/img/pimentao-01.jpg';
      this.produtosLista.push(produto);
    }
  }

  public update(produto: Produto) {
    for(let obj of this.produtosLista) {
      if (obj.id === produto.id) {
        obj.nome = produto.nome;
        obj.descricao = produto.descricao;
        obj.imagem = produto.imagem;
        obj.valorVenda = produto.valorVenda;
        obj.status = produto.status;
        break;
      }
    }
  }

  public delete(id: number) {
    let posicao = null;

    if (id || id === 0) {
      for (let i= 0; i < this.produtosLista.length; i++) {
        if (id === this.produtosLista[i].id) {
          posicao = i;
          break;
        }
      }

      if (posicao || posicao === 0) {
        this.produtosLista.splice(posicao, 1);
      }

    }
  }

}
