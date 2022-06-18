import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Curso } from '../model/Curso';
import { Parceiro } from '../model/Parceiro';
import { ParceiroLogin } from '../model/ParceiroLogin';

@Injectable({
  providedIn: 'root'
})

export class ParceiroService {

  constructor(
    private http: HttpClient
    ) { }

  token = {headers: new HttpHeaders().set("Authorization", environment.token)}

  getById(id: number): Observable<Parceiro>{
    return this.http.get<Parceiro>(`https://educamaismais.herokuapp.com/parceiros/${id}`, this.token)
  }

  getByEmail(email: number): Observable<Parceiro>{
    return this.http.get<Parceiro>(`https://educamaismais.herokuapp.com/parceiros/email/${email}`, this.token)
  }

  getByNome(nome: number): Observable<Parceiro[]>{
    return this.http.get<Parceiro[]>(`https://educamaismais.herokuapp.com/parceiros/nome/${nome}`, this.token)
  }

  getByCNPJ(cnpj: string): Observable<Parceiro>{
    return this.http.get<Parceiro>(`https://educamaismais.herokuapp.com/parceiros/cnpj/${cnpj}`, this.token)
  }

  getByCurso(email: number): Observable<Curso[]>{
    return this.http.get<Curso[]>(`https://educamaismais.herokuapp.com/parceiros/cursos/${email}`, this.token)
  }

  getAll(): Observable<Parceiro[]>{
    return this.http.get<Parceiro[]>(`https://educamaismais.herokuapp.com/parceiros/all`, this.token)
  }

  postLogar(parceiroLogin:ParceiroLogin):Observable<ParceiroLogin>{
    return this.http.post<ParceiroLogin>('https://educamaismais.herokuapp.com/parceiros/logar',parceiroLogin)
  }

  postCadastrar(parceiro:Parceiro):Observable<Parceiro> {
    return this.http.post<Parceiro>('https://educamaismais.herokuapp.com/parceiros/cadastrar',parceiro)
  }

  putAtualizar(parceiro: Parceiro):Observable<Parceiro>{
    return this.http.put<Parceiro>('https://educamaismais.herokuapp.com/parceiros/atualizar', parceiro, this.token)
  }

  logado(){
    let ok: boolean=false
    if(environment.token != ''){
      ok=true
    }
    console.log(environment.token)
    return ok
  }

}
