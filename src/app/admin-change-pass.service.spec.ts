import { TestBed } from '@angular/core/testing';

import { AdminChangePassService } from './admin-change-pass.service';

describe('AdminChangePassService', () => {
  let service: AdminChangePassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminChangePassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
