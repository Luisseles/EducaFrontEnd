import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cursofront',
  templateUrl: './cursofront.component.html',
  styleUrls: ['./cursofront.component.css']
})
export class CursofrontComponent implements OnInit {

  nome = environment.nome
  constructor() { }

  ngOnInit(): void {
  }

}
