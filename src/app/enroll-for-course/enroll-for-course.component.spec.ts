import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollForCourseComponent } from './enroll-for-course.component';

describe('EnrollForCourseComponent', () => {
  let component: EnrollForCourseComponent;
  let fixture: ComponentFixture<EnrollForCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollForCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollForCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
