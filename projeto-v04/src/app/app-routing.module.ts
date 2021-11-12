import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './guard/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from 'src/app/signin/signin.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutoInfoComponent } from './produto-info/produto-info.component';

/*
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './produtos/produto-novo/produto-novo.component';
import { ProdutoUpdateComponent } from 'src/app/produto-update/produto-update.component';
*/

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produtos',
    loadChildren: ()=> import('src/app/produtos/produtos.module').then(m=> m.ProdutosModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'painel',
    component: PainelComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produto-info/:id',
    component: ProdutoInfoComponent
  }
  /*
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'produto-update/:id',
    component: ProdutoUpdateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produto-novo',
    component: ProdutoNovoComponent,
    canActivate: [AuthGuardService]
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
