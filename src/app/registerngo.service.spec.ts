import { TestBed } from '@angular/core/testing';

import { RegisterngoService } from './registerngo.service';

describe('RegisterngoService', () => {
  let service: RegisterngoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterngoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
