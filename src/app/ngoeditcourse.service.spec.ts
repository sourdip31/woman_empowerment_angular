import { TestBed } from '@angular/core/testing';

import { NgoeditcourseService } from './ngoeditcourse.service';

describe('NgoeditcourseService', () => {
  let service: NgoeditcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoeditcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
