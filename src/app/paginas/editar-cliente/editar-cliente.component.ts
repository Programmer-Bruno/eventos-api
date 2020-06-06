import { Component, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  public cliente: Cliente;
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private clienteService: ClienteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      this.getCliente(this.activatedRoute.snapshot.params.id);
  }
  getCliente(id: number) {
    this.clienteService.getCliente(id).subscribe((cliente: Cliente) => {
      this.cliente = cliente;
    }, () => { this.erroMsgComponent.setError('Falha ao buscar Cliente. '); });
  }
  updateCliente(cliente: Cliente) {
    this.clienteService.updateCliente(cliente).subscribe(
      () => {this.router.navigateByUrl('/cliente'); },
      () => { this.erroMsgComponent.setError('Falha ao atualizar Cliente'); });
  }


}
