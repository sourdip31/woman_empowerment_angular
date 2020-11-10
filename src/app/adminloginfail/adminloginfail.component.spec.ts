import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginfailComponent } from './adminloginfail.component';

describe('AdminloginfailComponent', () => {
  let component: AdminloginfailComponent;
  let fixture: ComponentFixture<AdminloginfailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloginfailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
