import { TestBed } from '@angular/core/testing';

import { NgologinService } from './ngologin.service';

describe('NgologinService', () => {
  let service: NgologinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgologinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
