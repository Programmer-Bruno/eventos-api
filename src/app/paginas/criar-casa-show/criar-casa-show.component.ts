import { Component, OnInit, ViewChild } from '@angular/core';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { CasaShowService } from 'src/app/services/casa-show.service';
import { Router } from '@angular/router';
import { CasaShow } from 'src/app/interfaces/casa-show';

@Component({
  selector: 'app-criar-casa-show',
  templateUrl: './criar-casa-show.component.html',
  styleUrls: ['./criar-casa-show.component.css']
})
export class CriarCasaShowComponent  {
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private clienteService: CasaShowService, private router: Router) { }

  addCasaShow(casaShow: CasaShow) {
    this.clienteService.addCasaShow(casaShow).subscribe(
      () => {this.router.navigateByUrl('/casaDeShow'); },
      () => {this.erroMsgComponent.setError('Falha ao adicionar casa de show.'); });
  }
}
