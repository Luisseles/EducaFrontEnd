import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Parceiro } from '../model/Parceiro';
import { ParceiroLogin } from '../model/ParceiroLogin';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { ParceiroService } from '../service/parceiro.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario: Usuario = new Usuario;
  parceiro: Parceiro = new Parceiro;
  usuarioLogin: UsuarioLogin = new UsuarioLogin
  parceiroLogin: ParceiroLogin = new ParceiroLogin

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private parceiroService: ParceiroService
  ) { }

  ngOnInit() {
    if(environment.token==''){
      this.router.navigate(['/inicio'])
    }
  }

  entrarUsuario() {
    this.usuarioService.postLogar(this.usuarioLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        environment.foto = this.usuarioLogin.foto
        environment.id = this.usuarioLogin.id
        environment.nome = this.usuarioLogin.nome
        environment.token = this.usuarioLogin.token
        this.router.navigate(["/inicio"])
        alert('Bem vindo(a)!')
      }, error: erro => {
        if (erro.status == 500 || erro.status == 401) {
          alert('ERRO! Usuário ou senha inválidos!')
        }
      },
    });
  }

  entrarParceiro() {
    this.parceiroService.postLogar(this.parceiroLogin).subscribe({
      next: (resp: ParceiroLogin) => {
        this.parceiroLogin = resp
        environment.foto = this.parceiroLogin.foto
        environment.id = this.parceiroLogin.id
        environment.nome = this.parceiroLogin.nome
        environment.token = this.parceiroLogin.token
        this.router.navigate(["/inicio"])
        alert('Bem vindo(a)!')
      }, error: erro => {
        if (erro.status == 500 || erro.status == 401) {
          alert('ERRO! Usuário ou senha inválidos!')
        }
      },
    });
  }

}
