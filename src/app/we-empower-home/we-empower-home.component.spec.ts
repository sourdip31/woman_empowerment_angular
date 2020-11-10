import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeEmpowerHomeComponent } from './we-empower-home.component';

describe('WeEmpowerHomeComponent', () => {
  let component: WeEmpowerHomeComponent;
  let fixture: ComponentFixture<WeEmpowerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeEmpowerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeEmpowerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
