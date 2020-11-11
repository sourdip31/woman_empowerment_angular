import { TestBed } from '@angular/core/testing';

import { NgoprofileService } from './ngoprofile.service';

describe('NgoprofileService', () => {
  let service: NgoprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
