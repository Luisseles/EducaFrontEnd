import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Parceiro } from '../model/Parceiro';
import { ParceiroService } from '../service/parceiro.service';

@Component({
  selector: 'app-cadastrar-parceiro',
  templateUrl: './cadastrar-parceiro.component.html',
  styleUrls: ['./cadastrar-parceiro.component.css']
})
export class CadastrarParceiroComponent implements OnInit {
  parceiro: Parceiro = new Parceiro;
  confirmarSenha: string;
  confirmarEmail: string;

  constructor(
    private parceiroService: ParceiroService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  conferirSenha(eventSenha:any){
    this.confirmarSenha=eventSenha.target.value
  }

  conferirEmail(eventEmail:any){
    this.confirmarEmail=eventEmail.target.value
  }

  cadastrarParceiro() {
    if(this.parceiro.senha != this.confirmarSenha){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'As senhas não coincidem',
      })
    }else if(this.parceiro.email != this.confirmarEmail){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Os e-mails não coincidem',
      })
    }else{
      this.parceiroService.postCadastrar(this.parceiro).subscribe((resp:Parceiro)=>{
        this.parceiro= resp
        this.router.navigate(['/entrarParceiro'])
        Swal.fire(
          'Cadastro Realizado Com Sucesso!',
          'Acesse sua conta na próxima página',
          'success'
        )
      })
    }
  }
}
