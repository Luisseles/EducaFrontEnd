import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

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
    alert("Compra efetuada com sucesso")
  }

}
