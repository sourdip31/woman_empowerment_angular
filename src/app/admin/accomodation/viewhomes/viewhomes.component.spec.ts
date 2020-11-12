import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhomesComponent } from './viewhomes.component';

describe('ViewhomesComponent', () => {
  let component: ViewhomesComponent;
  let fixture: ComponentFixture<ViewhomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
