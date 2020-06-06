import { Component, OnInit, ViewChild } from '@angular/core';
import { CasaShow } from 'src/app/interfaces/casa-show';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { CasaShowService } from 'src/app/services/casa-show.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-casa-show',
  templateUrl: './editar-casa-show.component.html',
  styleUrls: ['./editar-casa-show.component.css']
})
export class EditarCasaShowComponent  {
  public casaShow: CasaShow;
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private casaShowService: CasaShowService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      this.getCasaShow(this.activatedRoute.snapshot.params.id);
  }
  getCasaShow(codigo: number) {
    this.casaShowService.getCasaShow(codigo).subscribe((casaShow: CasaShow) => {
      this.casaShow = casaShow;
    }, () => { this.erroMsgComponent.setError('Falha ao buscar Casa de Show. '); });
  }
  updateCasaShow(casaShow: CasaShow) {
    this.casaShowService.updateCasaShow(casaShow).subscribe(
      () => {this.router.navigateByUrl('/casaDeShow'); },
      () => { this.erroMsgComponent.setError('Falha ao atualizar Casa de Show'); });
  }
}
