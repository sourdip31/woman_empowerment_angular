import { TestBed } from '@angular/core/testing';

import { NgodeletecourseService } from './ngodeletecourse.service';

describe('NgodeletecourseService', () => {
  let service: NgodeletecourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgodeletecourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
