import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccomodationComponent } from './addaccomodation.component';

describe('AddaccomodationComponent', () => {
  let component: AddaccomodationComponent;
  let fixture: ComponentFixture<AddaccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
