import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CasaShow } from 'src/app/interfaces/casa-show';

@Component({
  selector: 'app-form-casa-show',
  templateUrl: './form-casa-show.component.html',
  styleUrls: ['./form-casa-show.component.css']
})
export class FormCasaShowComponent  {
  @Input() casaShow: CasaShow =  {} as CasaShow;
  @Output() outputCasaShow: EventEmitter<CasaShow> = new EventEmitter();

  onSubmit() {
    this.outputCasaShow.emit(this.casaShow);
  }

}
