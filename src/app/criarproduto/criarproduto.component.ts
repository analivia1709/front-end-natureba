import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-criarproduto',
  templateUrl: './criarproduto.component.html',
  styleUrls: ['./criarproduto.component.css']
})
export class CriarprodutoComponent implements OnInit {

  
  produto: Produto = new Produto
  

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  criarProduto() {
    
    this.produtoService.criarProdutoPorUsuario(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/meusProdutos'])
      alert('Parabéns pelo novo produto!')
    })
  }
}

