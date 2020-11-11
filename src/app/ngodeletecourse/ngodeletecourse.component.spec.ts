import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgodeletecourseComponent } from './ngodeletecourse.component';

describe('NgodeletecourseComponent', () => {
  let component: NgodeletecourseComponent;
  let fixture: ComponentFixture<NgodeletecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgodeletecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgodeletecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
