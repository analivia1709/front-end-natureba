import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-criarproduto',
  templateUrl: './criarproduto.component.html',
  styleUrls: ['./criarproduto.component.css']
})
export class CriarprodutoComponent implements OnInit {

  
  produto: Produto = new Produto
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  criarProduto() {
    
    this.authService.cadastrarProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/meusProdutos'])
      alert('Parabéns pelo novo produto!')
    })
  }
}

