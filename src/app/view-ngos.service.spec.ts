import { TestBed } from '@angular/core/testing';

import { ViewNGOsService } from './view-ngos.service';

describe('ViewNGOsService', () => {
  let service: ViewNGOsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewNGOsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
