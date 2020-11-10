import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAccomodationComponent } from './accomodation.component';

describe('AccomodationComponent', () => {
  let component: ApplyAccomodationComponent;
  let fixture: ComponentFixture<ApplyAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
