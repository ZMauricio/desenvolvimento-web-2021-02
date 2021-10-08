import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from './../model/produto.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  public produtosLista: Array<Produto> = [];

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:3000/produtos');
  }

  public get(id: number): Observable<Produto> {
   return this.http.get<Produto>('http://localhost:3000/produtos/'+id);
  }

  public add(produto: Produto): Observable<any> {
    produto.imagem = './../../assets/img/pimentao-01.jpg';
    const produtoJSON = JSON.stringify(produto);

    return this.http.post<Produto>('http://localhost:3000/produtos', produtoJSON, httpOptions);
  }

  public update(produto: Produto): Observable<any> {
   const id = produto.id;
   const produtoJSON = JSON.stringify(produto);

   return this.http.put(`http://localhost:3000/produtos/${id}`, produtoJSON, httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/produtos/${id}`);
  }

}
