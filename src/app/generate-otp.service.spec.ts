import { TestBed } from '@angular/core/testing';

import { GenerateOTPService } from './generate-otp.service';

describe('GenerateOTPService', () => {
  let service: GenerateOTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateOTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
