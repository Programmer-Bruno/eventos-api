import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCasaShowComponent } from './editar-casa-show.component';

describe('EditarCasaShowComponent', () => {
  let component: EditarCasaShowComponent;
  let fixture: ComponentFixture<EditarCasaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCasaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCasaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
