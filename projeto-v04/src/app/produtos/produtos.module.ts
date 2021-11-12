import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { ProdutosComponent } from './produtos.component';
import { ProdutoNovoComponent } from './novo/produto-novo.component';
import { ProdutoUpdateComponent } from './update/produto-update.component';
import { ProdutoDetalhesComponent } from './detalhes/produto-detalhes.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoNovoComponent,
    ProdutoUpdateComponent,
    ProdutoDetalhesComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule
  ],
  providers: []
})
export class ProdutosModule { }
