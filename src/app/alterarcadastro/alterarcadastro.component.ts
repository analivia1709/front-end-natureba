import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-alterarcadastro',
  templateUrl: './alterarcadastro.component.html',
  styleUrls: ['./alterarcadastro.component.css']
})
export class AlterarcadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  alterarCadastro() {
    if(this.usuario.senhaUsuario != this.confirmarSenha){
      alert('As senhas não conferem.')
    }
    else{
      this.usuarioService.alterarCadastro(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/paginaInicial'])
        alert('Bem-vinde a nossa Ecovila!')
      })
    }
  }
}