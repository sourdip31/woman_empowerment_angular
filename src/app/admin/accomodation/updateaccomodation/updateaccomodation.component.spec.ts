import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaccomodationComponent } from './updateaccomodation.component';

describe('UpdateaccomodationComponent', () => {
  let component: UpdateaccomodationComponent;
  let fixture: ComponentFixture<UpdateaccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateaccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
