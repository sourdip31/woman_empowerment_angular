import { TestBed } from '@angular/core/testing';

import { ViewCourseByNGOIdService } from './view-course-by-ngoid.service';

describe('ViewCourseByNGOIdService', () => {
  let service: ViewCourseByNGOIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCourseByNGOIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
