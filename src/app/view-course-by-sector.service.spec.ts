import { TestBed } from '@angular/core/testing';

import { ViewCourseBySectorService } from './view-course-by-sector.service';

describe('ViewCourseBySectorService', () => {
  let service: ViewCourseBySectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCourseBySectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
