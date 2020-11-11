import { TestBed } from '@angular/core/testing';

import { CoursebyngoService } from './coursebyngo.service';

describe('CoursebyngoService', () => {
  let service: CoursebyngoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursebyngoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
