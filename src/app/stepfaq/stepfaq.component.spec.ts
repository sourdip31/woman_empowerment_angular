import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepfaqComponent } from './stepfaq.component';

describe('StepfaqComponent', () => {
  let component: StepfaqComponent;
  let fixture: ComponentFixture<StepfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
