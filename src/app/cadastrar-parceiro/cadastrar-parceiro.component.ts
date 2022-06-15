import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(
    private parceiroService: ParceiroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  confirmSenha(event:any){
    this.confirmarSenha=event.target.value
  }

  cadastrarParceiro() {
    if(this.parceiro.senha != this.confirmarSenha){
      alert('as senhas estão incorretas!')
    }else{
      this.parceiroService.postCadastrar(this.parceiro).subscribe((resp:Parceiro)=>{
        this.parceiro= resp
        this.router.navigate(['/entrar'])
        alert('usuario cadastrado!!')
      })
    }
  }
}
