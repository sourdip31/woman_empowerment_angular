import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoaddcourseformComponent } from './ngoaddcourseform.component';

describe('NgoaddcourseformComponent', () => {
  let component: NgoaddcourseformComponent;
  let fixture: ComponentFixture<NgoaddcourseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoaddcourseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoaddcourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
