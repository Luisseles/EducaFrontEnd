import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
    return this.http.get<Parceiro>(`http://localhost:8080/parceiros/${id}`, this.token)
  }

  getByEmail(email: number): Observable<Parceiro>{
    return this.http.get<Parceiro>(`http://localhost:8080/parceiros/email/${email}`, this.token)
  }

  getByNome(nome: number): Observable<Parceiro>{
    return this.http.get<Parceiro>(`http://localhost:8080/parceiros/nome/${nome}`, this.token)
  }

  getByCurso(email: number): Observable<Parceiro>{
    return this.http.get<Parceiro>(`http://localhost:8080/parceiros/curso/${email}`, this.token)
  }

  getAll(): Observable<Parceiro[]>{
    return this.http.get<Parceiro[]>(`http://localhost:8080/parceiros/all`, this.token)
  }

  postEntrar(parceiroLogin:ParceiroLogin):Observable<ParceiroLogin>{
    return this.http.post<ParceiroLogin>('http://localhost:8080/parceiros/logar',parceiroLogin)
  }

  postCadastrar(parceiro:Parceiro):Observable<Parceiro> {
    return this.http.post<Parceiro>('http://localhost:8080/parceiros/cadastrar',parceiro)
  }

  putEditar(parceiro: Parceiro):Observable<Parceiro>{
    return this.http.put<Parceiro>('http://localhost:8080/parceiros/editar', parceiro, this.token)
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
