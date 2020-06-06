import { TestBed } from '@angular/core/testing';

import { CasaShowService } from './casa-show.service';

describe('CasaShowService', () => {
  let service: CasaShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasaShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
