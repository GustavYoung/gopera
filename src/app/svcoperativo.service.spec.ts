import { TestBed } from '@angular/core/testing';

import { SvcoperativoService } from './svcoperativo.service';

describe('SvcoperativoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvcoperativoService = TestBed.get(SvcoperativoService);
    expect(service).toBeTruthy();
  });
});
