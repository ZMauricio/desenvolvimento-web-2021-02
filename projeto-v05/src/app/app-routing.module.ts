import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { SigninComponent } from 'src/app/signin/signin.component';
import { PainelComponent } from './painel/painel.component';


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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: 'painel',
    component: PainelComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produtos',
    loadChildren: ()=>import('src/app/produtos/produtos.module')
    .then(m=> m.ProdutosModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'clientes',
    loadChildren: ()=>import('src/app/clientes/clientes.module').then(m=> m.ClientesModule),
    // canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
