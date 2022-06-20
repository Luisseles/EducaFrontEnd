import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  nome = environment.nome
  constructor() { }

  ngOnInit() {
    
  }
  comprar(){
    Swal.fire(
      'Compra Realizada Com Sucesso!',
      'Aguardando confirmação de pagamento',
      'success'
    )
  }

}
