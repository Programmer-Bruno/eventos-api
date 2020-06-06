import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../../interfaces/cliente';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public clientes: Cliente[];
  @ViewChild(ErroMsgComponent) errorMsgComponent: ErroMsgComponent;
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getListClientes();
  }

  getListClientes() {
    this.clienteService.getListClientes()
      .subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;
      }, () => {this.errorMsgComponent.setError('Falha ao buscar clientes.'); });
  }
  deleteCliente(codigo: number) {
    this.clienteService.deleteCliente(codigo)
      .subscribe(() => {
        this.getListClientes();
      }, () => {this.errorMsgComponent.setError('Falha ao deletar cliente'); });
  }
  existemClientes(): boolean {
    return this.clientes && this.clientes.length > 0;
  }
}
