import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCasaShowComponent } from './criar-casa-show.component';

describe('CriarCasaShowComponent', () => {
  let component: CriarCasaShowComponent;
  let fixture: ComponentFixture<CriarCasaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarCasaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCasaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
