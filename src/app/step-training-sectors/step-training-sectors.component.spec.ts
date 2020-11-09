import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTrainingSectorsComponent } from './step-training-sectors.component';

describe('StepTrainingSectorsComponent', () => {
  let component: StepTrainingSectorsComponent;
  let fixture: ComponentFixture<StepTrainingSectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTrainingSectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTrainingSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
