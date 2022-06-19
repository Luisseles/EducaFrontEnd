import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cursocyber',
  templateUrl: './cursocyber.component.html',
  styleUrls: ['./cursocyber.component.css']
})
export class CursocyberComponent implements OnInit {

  nome = environment.nome
  constructor() { }

  ngOnInit(): void {
  }

}
