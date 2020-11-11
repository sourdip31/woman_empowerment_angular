import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoregisterstatusComponent } from './ngoregisterstatus.component';

describe('NgoregisterstatusComponent', () => {
  let component: NgoregisterstatusComponent;
  let fixture: ComponentFixture<NgoregisterstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoregisterstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoregisterstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
