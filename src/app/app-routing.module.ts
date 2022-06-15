import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar-usuario/entrar-usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastrarComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EntrarParceiroComponent } from './entrar-parceiro/entrar-parceiro.component';
import { CadastrarParceiroComponent } from './cadastrar-parceiro/cadastrar-parceiro.component';

const routes: Routes = [
  { path: "", redirectTo: "entrar", pathMatch: "full" },
  { path: "entrarUsuario", component: EntrarComponent },
  { path: "entrarParceiro", component:EntrarParceiroComponent},
  { path: "cadastrarUsuario", component: CadastrarComponent },
  { path: "cadastrarParceiro", component: CadastrarParceiroComponent},
  { path: "inicio", component: InicioComponent},
  { path: "parceiros", component:ParceirosComponent},
  { path: "usuario", component:UsuarioComponent},
  { path: "sobre-nos", component:SobreNosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
