import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoorganizationsComponent } from './ngoorganizations.component';

describe('NgoorganizationsComponent', () => {
  let component: NgoorganizationsComponent;
  let fixture: ComponentFixture<NgoorganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoorganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoorganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
