import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Evento } from 'src/app/interfaces/evento';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.css']
})
export class FormEventoComponent {
  @Input() evento: Evento =  {} as Evento;
  @Output() outputEvento: EventEmitter<Evento> = new EventEmitter();

  onSubmit() {
    this.outputEvento.emit(this.evento);
  }

}
