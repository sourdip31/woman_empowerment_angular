import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNVerifyOtpAdminComponent } from './generate-nverify-otp-admin.component';

describe('GenerateNVerifyOtpAdminComponent', () => {
  let component: GenerateNVerifyOtpAdminComponent;
  let fixture: ComponentFixture<GenerateNVerifyOtpAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateNVerifyOtpAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNVerifyOtpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
