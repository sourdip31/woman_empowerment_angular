import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsyComponent } from './viewsy.component';

describe('ViewsyComponent', () => {
  let component: ViewsyComponent;
  let fixture: ComponentFixture<ViewsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
