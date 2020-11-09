import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoaddcoursesComponent } from './ngoaddcourses.component';

describe('NgoaddcoursesComponent', () => {
  let component: NgoaddcoursesComponent;
  let fixture: ComponentFixture<NgoaddcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoaddcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoaddcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
