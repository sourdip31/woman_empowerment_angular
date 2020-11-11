import { TestBed } from '@angular/core/testing';

import { UserChangePassService } from './user-change-pass.service';

describe('UserChangePassService', () => {
  let service: UserChangePassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserChangePassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
