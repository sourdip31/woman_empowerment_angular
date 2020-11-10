import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccomodationComponent } from './viewaccomodation.component';

describe('ViewaccomodationComponent', () => {
  let component: ViewaccomodationComponent;
  let fixture: ComponentFixture<ViewaccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
