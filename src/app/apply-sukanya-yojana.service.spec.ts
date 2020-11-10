import { TestBed } from '@angular/core/testing';

import { ApplySukanyaYojanaService } from './apply-sukanya-yojana.service';

describe('ApplySukanyaYojanaService', () => {
  let service: ApplySukanyaYojanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplySukanyaYojanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
