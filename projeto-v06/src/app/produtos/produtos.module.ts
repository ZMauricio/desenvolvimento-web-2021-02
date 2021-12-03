import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosRoutingModule } from './produtos-routing.module';

import { ProdutosComponent } from './produtos.component';
import { ProdutoNovoComponent } from './novo/produto-novo.component';
import { ProdutoEditarComponent } from './editar/produto-editar.component';
import { ProdutoDetalhesComponent } from './detalhes/produto-detalhes.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoNovoComponent,
    ProdutoEditarComponent,
    ProdutoDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule
  ],
  providers: []
})
export class ProdutosModule { }
