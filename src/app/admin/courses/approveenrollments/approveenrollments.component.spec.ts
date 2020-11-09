import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveenrollmentsComponent } from './approveenrollments.component';

describe('ApproveenrollmentsComponent', () => {
  let component: ApproveenrollmentsComponent;
  let fixture: ComponentFixture<ApproveenrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveenrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveenrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
