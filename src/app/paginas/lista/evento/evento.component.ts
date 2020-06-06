import { Component, ViewChild, OnInit} from '@angular/core';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  public eventos: Evento[];
  @ViewChild(ErroMsgComponent) errorMsgComponent: ErroMsgComponent;
  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getListEventos();
  }

  getListEventos() {
    this.eventoService.getListEventos()
      .subscribe((eventos: Evento[]) => {
        this.eventos = eventos;
      }, () => {this.errorMsgComponent.setError('Falha ao buscar eventos.'); });
  }
  deleteEvento(codigo: number) {
    this.eventoService.deleteEvento(codigo)
      .subscribe(() => {
        this.getListEventos();
      }, () => {this.errorMsgComponent.setError('Falha ao deletar evento'); });
  }
  existemEventos(): boolean {
    return this.eventos && this.eventos.length > 0;
  }

}
