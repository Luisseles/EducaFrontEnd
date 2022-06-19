import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EntrarComponent } from './entrar-usuario/entrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { EntrarParceiroComponent } from './entrar-parceiro/entrar-parceiro.component';
import { CadastrarParceiroComponent } from './cadastrar-parceiro/cadastrar-parceiro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CursoComponent } from './curso/curso.component';
import { CursofrontComponent } from './cursofront/cursofront.component';
import { CursocyberComponent } from './cursocyber/cursocyber.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    InicioComponent,
    ParceirosComponent,
    UsuarioComponent,
    SobreNosComponent,
    EntrarParceiroComponent,
    CadastrarParceiroComponent,
    CadastrarComponent,
    CategoriaComponent,
    CursoComponent,
    CursofrontComponent,
    CursocyberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
