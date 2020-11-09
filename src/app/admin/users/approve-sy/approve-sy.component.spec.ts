import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSYComponent } from './approve-sy.component';

describe('ApproveSYComponent', () => {
  let component: ApproveSYComponent;
  let fixture: ComponentFixture<ApproveSYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
