import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCasaShowComponent } from './form-casa-show.component';

describe('FormCasaShowComponent', () => {
  let component: FormCasaShowComponent;
  let fixture: ComponentFixture<FormCasaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCasaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCasaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
