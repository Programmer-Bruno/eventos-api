import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './paginas/lista/cliente/cliente.component';
import { CriarClienteComponent } from './paginas/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './paginas/editar-cliente/editar-cliente.component';
import { IndexComponent } from './paginas/index/index.component';
import { CasaShowComponent } from './paginas/lista/casa-show/casa-show.component';
import { CriarCasaShowComponent } from './paginas/criar-casa-show/criar-casa-show.component';
import { EditarCasaShowComponent } from './paginas/editar-casa-show/editar-casa-show.component';
import { EventoComponent } from './paginas/lista/evento/evento.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/criar', component: CriarClienteComponent},
  {path: 'cliente/editar/:id', component: EditarClienteComponent},
  {path: 'casaDeShow', component: CasaShowComponent},
  {path: 'casaDeShow/criar', component: CriarCasaShowComponent},
  {path: 'casaDeShow/editar/:id', component: EditarCasaShowComponent},
  {path: 'evento', component: EventoComponent},
  {path: 'evento/criar/:id', component: EventoComponent},
  {path: 'evento/editar/:id', component: EventoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
