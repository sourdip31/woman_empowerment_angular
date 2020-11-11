import { TestBed } from '@angular/core/testing';

import { NgoChangePassService } from './ngo-change-pass.service';

describe('NgoChangePassService', () => {
  let service: NgoChangePassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoChangePassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
