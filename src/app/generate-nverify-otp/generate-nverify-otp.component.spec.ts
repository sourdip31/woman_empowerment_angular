import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNVerifyOtpComponent } from './generate-nverify-otp.component';

describe('GenerateNVerifyOtpComponent', () => {
  let component: GenerateNVerifyOtpComponent;
  let fixture: ComponentFixture<GenerateNVerifyOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateNVerifyOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
