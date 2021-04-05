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
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    TelaUsuarioComponent,
    TelaProdutosComponent,
    TelaFavoritosComponent,
    CorpoHomeComponent,
    MinhasComprasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
