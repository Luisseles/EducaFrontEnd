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
  pronome: string;

  constructor( 
    private usuarioService: UsuarioService,
    private router:Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event:any){
    this.confirmarSenha=event.target.value
  }

  proname(event:any){
    this.pronome=event.target.value
  }

  cadastrarUsuario() {
    this.usuario.pronome = this.pronome;
    if(this.usuario.senha != this.confirmarSenha){
      alert('as senhas estão incorretas!')
    }else{
      this.usuarioService.postCadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario= resp
        this.router.navigate(['/entrar'])
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      })
    }
  }
}
