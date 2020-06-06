import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';
import { ClienteComponent } from './paginas/lista/cliente/cliente.component';
import { FormClienteComponent } from './compartilhado/form-cliente/form-cliente.component';
import { FormsModule } from '@angular/forms';
import { CriarClienteComponent } from './paginas/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './paginas/editar-cliente/editar-cliente.component';
import { IndexComponent } from './paginas/index/index.component';
import { CasaShowComponent } from './paginas/lista/casa-show/casa-show.component';
import { FormCasaShowComponent } from './compartilhado/form-casa-show/form-casa-show.component';
import { CriarCasaShowComponent } from './paginas/criar-casa-show/criar-casa-show.component';
import { EditarCasaShowComponent } from './paginas/editar-casa-show/editar-casa-show.component';
import { EventoComponent } from './paginas/lista/evento/evento.component';
import { FormEventoComponent } from './compartilhado/form-evento/form-evento.component';
import { CriarEventoComponent } from './criar-evento/criar-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroMsgComponent,
    ClienteComponent,
    FormClienteComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    IndexComponent,
    CasaShowComponent,
    FormCasaShowComponent,
    CriarCasaShowComponent,
    EditarCasaShowComponent,
    EventoComponent,
    FormEventoComponent,
    CriarEventoComponent
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
