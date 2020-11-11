import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoUpdatePasswordComponent } from './ngo-update-password.component';

describe('NgoUpdatePasswordComponent', () => {
  let component: NgoUpdatePasswordComponent;
  let fixture: ComponentFixture<NgoUpdatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
