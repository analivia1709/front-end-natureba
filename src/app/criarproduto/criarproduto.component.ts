import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-criarproduto',
  templateUrl: './criarproduto.component.html',
  styleUrls: ['./criarproduto.component.css']
})
export class CriarprodutoComponent implements OnInit {

  
  produto: Produto = new Produto
  listaCategorias: Categoria[]
  

  constructor(private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllCategorias()
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

  criarProduto() {
    this.produtoService.criarProdutoPorUsuario(this.produto, environment.cpf).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/meusProdutos'])
      alert('Parabéns pelo novo produto!')
    })
  }
}