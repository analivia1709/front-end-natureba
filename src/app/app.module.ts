import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { TelaFavoritosComponent } from './tela-favoritos/tela-favoritos.component';
import { CorpoHomeComponent } from './corpo-home/corpo-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    ComoFuncionaComponent,
    TelaUsuarioComponent,
    TelaProdutosComponent,
    TelaFavoritosComponent,
    CorpoHomeComponent
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
