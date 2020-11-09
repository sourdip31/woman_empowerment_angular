import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAboutUsComponent } from './step-about-us.component';

describe('StepAboutUsComponent', () => {
  let component: StepAboutUsComponent;
  let fixture: ComponentFixture<StepAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
