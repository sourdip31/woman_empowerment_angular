import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoprofileComponent } from './ngoprofile.component';

describe('NgoprofileComponent', () => {
  let component: NgoprofileComponent;
  let fixture: ComponentFixture<NgoprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
