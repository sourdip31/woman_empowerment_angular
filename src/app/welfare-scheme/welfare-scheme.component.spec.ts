import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareSchemeComponent } from './welfare-scheme.component';

describe('WelfareSchemeComponent', () => {
  let component: WelfareSchemeComponent;
  let fixture: ComponentFixture<WelfareSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelfareSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelfareSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
