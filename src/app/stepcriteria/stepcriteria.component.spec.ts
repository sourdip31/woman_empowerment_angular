import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepcriteriaComponent } from './stepcriteria.component';

describe('StepcriteriaComponent', () => {
  let component: StepcriteriaComponent;
  let fixture: ComponentFixture<StepcriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepcriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepcriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
