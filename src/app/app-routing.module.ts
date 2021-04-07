import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarcadastroComponent } from './alterarcadastro/alterarcadastro.component';
import { AlterarprodutoComponent } from './alterarproduto/alterarproduto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CorpoHomeComponent } from './corpo-home/corpo-home.component';
import { CriarprodutoComponent } from './criarproduto/criarproduto.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { NossoTimeComponent } from './nosso-time/nosso-time.component';
import { TelaFavoritosComponent } from './tela-favoritos/tela-favoritos.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';

const routes: Routes = [
  {path: '', redirectTo: 'paginaInicial', pathMatch: 'full'},

  {path:'alterarCadastro', component: AlterarcadastroComponent},
  {path: 'alterarCadastro/:id', component: AlterarcadastroComponent},

  {path: 'alterarProduto/:idProduto/:cpf', component: AlterarprodutoComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'comoFunciona', component: ComoFuncionaComponent},
  {path: 'paginaInicial', component: CorpoHomeComponent},
  {path: 'criarProduto', component: CriarprodutoComponent},
  {path: 'nossoTime', component: NossoTimeComponent},
  {path: 'meusFavoritos', component: TelaFavoritosComponent},
  {path: 'meusProdutos', component: TelaProdutosComponent},
  {path: 'minhaPagina', component: TelaUsuarioComponent},
  {path: 'minhasCompras', component: MinhasComprasComponent},
  {path: 'logado', component: MenuLogadoComponent},
  {path: 'usuario', component:TelaUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
