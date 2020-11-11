import { TestBed } from '@angular/core/testing';

import { ViewallngoService } from './viewallngo.service';

describe('ViewallngoService', () => {
  let service: ViewallngoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewallngoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
