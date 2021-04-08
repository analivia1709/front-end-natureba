import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { TelaFavoritosComponent } from './tela-favoritos/tela-favoritos.component';
import { CorpoHomeComponent } from './corpo-home/corpo-home.component';
import { NossoTimeComponent } from './nosso-time/nosso-time.component';
import { PopUpLoginComponent } from './pop-up-login/pop-up-login.component';
import { ContatoComponent } from './contato/contato.component';
import { PopUpComprasComponent } from './pop-up-compras/pop-up-compras.component';
import { PopUpProdutoComponent } from './pop-up-produto/pop-up-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    TelaUsuarioComponent,
    TelaProdutosComponent,
    TelaFavoritosComponent,
    CorpoHomeComponent,
    NossoTimeComponent,
    PopUpLoginComponent,
    ContatoComponent,
    PopUpComprasComponent,
    PopUpProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
