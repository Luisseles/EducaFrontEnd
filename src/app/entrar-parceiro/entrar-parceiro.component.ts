import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { ParceiroLogin } from '../model/ParceiroLogin';
import { ParceiroService } from '../service/parceiro.service';

@Component({
  selector: 'app-entrar-parceiro',
  templateUrl: './entrar-parceiro.component.html',
  styleUrls: ['./entrar-parceiro.component.css']
})
export class EntrarParceiroComponent implements OnInit {
  parceiroLogin: ParceiroLogin = new ParceiroLogin;

  constructor(
    private parceiroService: ParceiroService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
