import { Component, OnInit, ViewChild } from '@angular/core';
import { ErroMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { CasaShow } from 'src/app/interfaces/casa-show';
import { CasaShowService } from 'src/app/services/casa-show.service';

@Component({
  selector: 'app-casa-show',
  templateUrl: './casa-show.component.html',
  styleUrls: ['./casa-show.component.css']
})
export class CasaShowComponent implements OnInit {
  public casasShow: CasaShow[];
  @ViewChild(ErroMsgComponent) errorMsgComponent: ErroMsgComponent;
  constructor(private casaShowService: CasaShowService) { }

  ngOnInit() {
    this.getListCasasShow();
  }

  getListCasasShow() {
    this.casaShowService.getListCasaShow()
      .subscribe((casasShow: CasaShow[]) => {
        this.casasShow = casasShow;
      }, () => {this.errorMsgComponent.setError('Falha ao buscar Casa de Show.'); });
  }
  deleteCasaShow(codigo: number) {
    this.casaShowService.deleteCasaShow(codigo)
      .subscribe(() => {
        this.getListCasasShow();
      }, () => {this.errorMsgComponent.setError('Falha ao deletar casa de show'); });
  }
  existemCasasShow(): boolean {
    return this.casasShow && this.casasShow.length > 0;
  }

}
