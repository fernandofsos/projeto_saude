import { TestBed } from '@angular/core/testing';

import { RiscoService } from './risco.service';

describe('RiscoService', () => {
  let service: RiscoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiscoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
