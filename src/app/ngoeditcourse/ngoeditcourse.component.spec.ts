import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoeditcourseComponent } from './ngoeditcourse.component';

describe('NgoeditcourseComponent', () => {
  let component: NgoeditcourseComponent;
  let fixture: ComponentFixture<NgoeditcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoeditcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoeditcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
