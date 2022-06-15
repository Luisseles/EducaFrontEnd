import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new  HttpHeaders().set('Authorization', environment.token) 
  }

  getById(id: number): Observable<Curso>{
    return this.http.get<Curso>(`http://localhost:8080/curso/${id}`, this.token)
  }

  getByTitulo(titulo: string): Observable<Curso[]>{
    return this.http.get<Curso[]>(`http://localhost:8080/curso/titulo${titulo}`, this.token)
  }

  getByCategoria(categoria: string): Observable<Curso[]>{
    return this.http.get<Curso[]>(`http://localhost:8080/curso/categoria${categoria}`, this.token)
  }

  getByEmail(email: string): Observable<Curso[]>{
    return this.http.get<Curso[]>(`http://localhost:8080/curso/usuario${email}`, this.token)
  }

  getByParceiro(email: string): Observable<Curso[]>{
    return this.http.get<Curso[]>(`http://localhost:8080/curso/parceiro${email}`, this.token)
  }

  getAll(): Observable<Curso[]>{
    return this.http.get<Curso[]>('http://localhost:8080/curso/all', this.token)
  }

  postCadastrar(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>('http://localhost:8080/curso/cadastrar', curso, this.token)
  }

  putEditar(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>('http://localhost:8080/curso/editar', curso, this.token)
  }

  putAdicionarAluno(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>('http://localhost:8080/curso/adicionarAluno', curso, this.token)
  }

  putAdicionarEmpresa(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>('http://localhost:8080/curso/adicionarEmpresa', curso, this.token)
  }

  delete(id: number): Observable<Curso>{
  return this.http.delete<Curso>(`http://localhost:8080/curso/${id}`, this.token)
  }
}

