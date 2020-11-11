import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveaccomodationComponent } from './approveaccomodation.component';

describe('ApproveaccomodationComponent', () => {
  let component: ApproveaccomodationComponent;
  let fixture: ComponentFixture<ApproveaccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveaccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveaccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
