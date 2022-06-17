import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../model/Usuario';
import { Curso } from '../model/Curso';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario()
  idUser: number
  confirmarSenha: string

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token==''){
      //alert('Seção expirada, faça login novamente')
      this.router.navigate(['/entrar'])
    }
  }

  atualizar() {
    if (this.usuario.senha != this.confirmarSenha) {
      alert('A senhas estão incorretas.')
      }else{
        this.usuarioService.putAtualizar(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
      
    
        this.router.navigate(['/inicio'])
        alert('Usuário atualizado com sucesso, faça o login novamente.')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0

        this.router.navigate(['/entrar'])
      })
    }
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value;
    //criando metodo para confirmar senha e quando colocar no formulario vai comparar senha
  }

  findByUser(id: number){
    this.usuarioService.getById(id).subscribe((resp:Usuario)=>{
      this.usuario = resp
    })
  }
}
  