import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AlterarcadastroComponent } from './alterarcadastro/alterarcadastro.component';
import { AlterarprodutoComponent } from './alterarproduto/alterarproduto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CardComponent } from './card/card.component';
import { CriarprodutoComponent } from './criarproduto/criarproduto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    AlterarcadastroComponent,
    AlterarprodutoComponent,
    CadastrarComponent,
    CardComponent,
    CriarprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
