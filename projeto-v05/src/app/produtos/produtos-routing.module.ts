import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { ProdutoNovoComponent } from './novo/produto-novo.component';
import { ProdutoEditarComponent } from './editar/produto-editar.component';
import { ProdutoDetalhesComponent } from './detalhes/produto-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
    children: [
      {
        path: 'novo',
        component: ProdutoNovoComponent
      },
      {
        path: 'editar/:id',
        component: ProdutoEditarComponent
      },
      {
        path: 'detalhes/:id',
        component: ProdutoDetalhesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule {}
