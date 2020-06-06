import { Component, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent  {
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private clienteService: ClienteService, private router: Router) { }

  addCliente(cliente: Cliente) {
    this.clienteService.addCliente(cliente).subscribe(
      () => {this.router.navigateByUrl('/cliente'); },
      () => {this.erroMsgComponent.setError('Falha ao adicionar cliente.'); });
  }

}
