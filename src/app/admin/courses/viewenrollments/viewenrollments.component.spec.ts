import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewenrollmentsComponent } from './viewenrollments.component';

describe('ViewenrollmentsComponent', () => {
  let component: ViewenrollmentsComponent;
  let fixture: ComponentFixture<ViewenrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewenrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewenrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
