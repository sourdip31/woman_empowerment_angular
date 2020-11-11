import { TestBed } from '@angular/core/testing';

import { NgoaddcourseService } from './ngoaddcourse.service';

describe('NgoaddcourseService', () => {
  let service: NgoaddcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoaddcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
