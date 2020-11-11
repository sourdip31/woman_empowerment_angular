import { TestBed } from '@angular/core/testing';

import { RegisterWithNgoService } from './register-with-ngo.service';

describe('RegisterWithNgoService', () => {
  let service: RegisterWithNgoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterWithNgoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
