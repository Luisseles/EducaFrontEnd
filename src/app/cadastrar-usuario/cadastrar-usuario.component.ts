import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario;
  confirmarSenha: string;
  confirmarUsuario: string;
  pronome: string;

  constructor( 
    private usuarioService: UsuarioService,
    private router:Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  conferirSenha(eventSenha:any){
    this.confirmarSenha=eventSenha.target.value
  }

  conferirUsuario(eventUsuario:any){
    this.confirmarUsuario=eventUsuario.target.value
  }

  proname(event:any){
    this.pronome=event.target.value
  }

  cadastrarUsuario() {
    this.usuario.pronome = this.pronome;
    if(this.usuario.senha != this.confirmarSenha){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'As senhas não coincidem',
      })
    }else if(this.usuario.usuario != this.confirmarUsuario) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Os e-mails não coincidem',
      })
    }else{
      this.usuarioService.postCadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario= resp
        this.router.navigate(['/entrarUsuario'])
        Swal.fire(
          'Cadastro Realizado com Sucesso!',
          'Acesse sua conta na próxima página',
          'success'
        )
      })
    }
  }
}
