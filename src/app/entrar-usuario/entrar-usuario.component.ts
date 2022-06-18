import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar-usuario.component.html',
  styleUrls: ['./entrar-usuario.component.css']
})
export class EntrarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
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
      }, error: erro => {
        if (erro.status == 500 || erro.status == 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario ou Senha incorreto(a)',
          })
        }
      },
    });
  }
}
