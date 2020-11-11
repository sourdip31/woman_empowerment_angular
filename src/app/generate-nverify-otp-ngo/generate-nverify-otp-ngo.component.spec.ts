import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNVerifyOtpNgoComponent } from './generate-nverify-otp-ngo.component';

describe('GenerateNVerifyOtpNgoComponent', () => {
  let component: GenerateNVerifyOtpNgoComponent;
  let fixture: ComponentFixture<GenerateNVerifyOtpNgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateNVerifyOtpNgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNVerifyOtpNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
